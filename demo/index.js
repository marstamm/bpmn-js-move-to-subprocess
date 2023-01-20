import BpmnModeler from 'bpmn-js/lib/Modeler';
import diagramXML from './example.bpmn';

import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

import RefactoringModule from '../lib';

const modeler = new BpmnModeler({
  container: '.canvas',
  keyboard: {
    bindTo: window,
  },
  additionalModules: [
    RefactoringModule,
  ],
});

modeler.importXML(diagramXML);
