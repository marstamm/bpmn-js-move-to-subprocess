import ContextPadProvider from './ContextPadProvider';
import ExtractionHandler from './cmd';

export default {
  __depends__: [
    ExtractionHandler,
  ],
  __init__: [
    'extractSubprocessContextPadProvider',
  ],
  extractSubprocessContextPadProvider: ['type', ContextPadProvider],
};
