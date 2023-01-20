# bpmn-js-move-to-subprocess

This bpmn-js extensions adds the context menu entry to move selected elements
into a subprocess. 

The option is only shown when the selected elements have a maximum of one
incoming and one outgoing flow. This ensures we don't break the process.