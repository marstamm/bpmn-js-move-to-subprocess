import {getGroupFlows} from './util/refactoringUtil';

export default class ContextPadProvider {
  constructor(contextPad, translate, commandStack) {
    const contextPadProvider = {
      getMultiElementContextPadEntries(elements) {
        return function(entries) {
          const groupFlows = getGroupFlows(elements);

          if (
            groupFlows.incoming.length > 1 ||
            groupFlows.outgoing.length > 1) {
            return entries;
          }

          return {
            ...entries,
            'to-subprocess': {
              title: translate('Extract elements to collapsed subprocess'),
              className: 'bpmn-icon-subprocess-collapsed',
              action() {
                commandStack.execute('elements.moveToSubprocess', {
                  elements,
                  groupFlows,
                });
              },
            },
          };
        };
      },
    };

    contextPad.registerProvider(800, contextPadProvider);
  }
}

ContextPadProvider.inject = [
  'contextPad',
  'translate',
  'commandStack',
];
