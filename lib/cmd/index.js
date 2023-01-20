import ExtractionHandler from './ExtractionHandler';

function CommandInitializer(eventBus, commandStack) {
  eventBus.on('diagram.init', function() {
    commandStack.registerHandler(
        'elements.moveToSubprocess', ExtractionHandler,
    );
  });
}

CommandInitializer.$inject = ['eventBus', 'commandStack'];

export default {
  __init__: [
    CommandInitializer,
  ],
};
