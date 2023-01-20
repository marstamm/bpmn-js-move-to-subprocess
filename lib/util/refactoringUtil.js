export * from 'diagram-js/lib/util/Elements';

export function getGroupFlows(elements) {
  const {incoming: allIncoming, outgoing: allOutgoing} =
  elements.reduce((flows, element) => {
    const {incoming, outgoing} = flows;

    incoming.push(
        ...(element.incoming || []),
    );

    outgoing.push(
        ...(element.outgoing || []),
    );

    return {incoming, outgoing};
  }, {incoming: [], outgoing: []});

  console.log(allIncoming, allOutgoing);

  // filter flows that are part of the group

  const incoming = allIncoming.filter((flow) => {
    return !allOutgoing.includes(flow);
  });

  const outgoing = allOutgoing.filter((flow) => {
    return !allIncoming.includes(flow);
  });

  return {incoming, outgoing};
}
