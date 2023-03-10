import {getPlaneIdFromShape} from 'bpmn-js/lib/util/DrilldownUtil';

import {getBBox, getParents} from '../util/refactoringUtil';

const DEFAULT_POSITION = {
  x: 180,
  y: 160,
};

const BUFFER_SIZE = 100;

export default class ExtractionHandler {
  constructor(commandStack, modeling, canvas, elementRegistry, selection) {
    this._commandStack = commandStack;
    this._modeling = modeling;
    this._canvas = canvas;
    this._elementRegistry = elementRegistry;
    this._selection = selection;
  }

  preExecute(context) {
    const {
      _modeling: modeling,
      _canvas: canvas,
      _elementRegistry: elementRegistry,
      _selection: selection,
    } = this;
    const elements = context.elements.filter((el) => {
      return !el.waypoints;
    });

    const groupFlows = context.groupFlows;

    // create new subprocess
    const elementBB = getBBox(elements);
    const mid = {
      x: elementBB.x + elementBB.width / 2,
      y: elementBB.y + elementBB.height / 2,
    };

    const newPosition = getPositionOnFlow(groupFlows) || mid;

    const rootElement = getSharedRoot(elements) || canvas.getRootElement();

    const newSubprocess = modeling.createShape(
        {type: 'bpmn:SubProcess', expanded: false},
        newPosition,
        rootElement);
    const plane = elementRegistry.get(getPlaneIdFromShape(newSubprocess));


    // Reconnect flows

    // Save starting and ending tasks for connection in the subprocess
    const startingTasks = groupFlows.incoming.map(
        (flow) => flow.target,
    );

    const endTasks = groupFlows.outgoing.map(
        (flow) => flow.source,
    );

    groupFlows.incoming.forEach((flow) => {
      modeling.reconnectEnd(flow, newSubprocess, newPosition);
    });

    groupFlows.outgoing.forEach((flow) => {
      modeling.reconnectStart(flow, newSubprocess, newPosition);
    });


    // Create start and end events
    const startEvent = startingTasks.length && modeling.createShape(
        {type: 'bpmn:StartEvent'},
        DEFAULT_POSITION,
        plane);

    const endEvent = endTasks.length && modeling.createShape(
        {type: 'bpmn:EndEvent'},
        {
          x: DEFAULT_POSITION.x + elementBB.width + BUFFER_SIZE * 2,
          y: DEFAULT_POSITION.y,
        },
        plane);

    // move all elements to the new subprocess
    modeling.moveElements(
        getParents(elements),
        {
          x: -elementBB.x + DEFAULT_POSITION.x + BUFFER_SIZE,
          y: -elementBB.y + DEFAULT_POSITION.y - 40,
        },
        plane,
    );

    // Connect to start and end events
    startingTasks.forEach((task) => {
      modeling.connect(startEvent, task);
    });

    endTasks.forEach((task) => {
      modeling.connect(task, endEvent);
    });

    selection.select(newSubprocess);
  }
}

ExtractionHandler.$inject = [
  'commandStack', 'modeling', 'canvas', 'elementRegistry', 'selection',
];


function getPositionOnFlow(groupFlows) {
  const {incoming, outgoing} = groupFlows;

  if (incoming.length === 0 || outgoing.length === 0) {
    return null;
  }

  const averageStart = incoming.reduce((sum, flow) => {
    const waypoint = flow.waypoints[flow.waypoints.length - 1];

    return {
      x: sum.x + waypoint.x,
      y: sum.y + waypoint.y,
    };
  }, {x: 0, y: 0});

  averageStart.x /= incoming.length;
  averageStart.y /= incoming.length;


  const averageEnd = outgoing.reduce((sum, flow) => {
    const waypoint = flow.waypoints[0];
    return {
      x: sum.x + waypoint.x,
      y: sum.y + waypoint.y,
    };
  }, {x: 0, y: 0});

  averageEnd.x /= outgoing.length;
  averageEnd.y /= outgoing.length;

  return {
    x: (averageStart.x + averageEnd.x) / 2,
    y: (averageStart.y + averageEnd.y) / 2,
  };
}


function getSharedRoot(elements) {
  if (!elements.length) {
    return;
  }

  let potentialParents = getParentChain(elements[0]);

  elements.forEach((el) => {
    const parents = getParentChain(el);

    potentialParents = potentialParents.filter((p) => {
      return parents.includes(p);
    });
  });

  return potentialParents[potentialParents.length - 1];
}

function getParentChain(element) {
  if (!element || element === element.parent) {
    return [];
  }

  return [...getParentChain(element.parent), element];
}
