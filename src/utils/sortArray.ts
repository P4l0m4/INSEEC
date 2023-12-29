export function sortArray<T>(events: T[]): T[] {
  return Object.keys(events)
    .sort()
    .reduce((sortedEvents, key) => {
      sortedEvents[key] = events[key];
      return sortedEvents;
    }, {});
}
