/**
 * Edge Cases:
 *  1. newInterval starts after curInterval ends -> insert curInterval
 *  2. newInterval ends before curInterval starts -> insert newInterval & curInterval, assign newInterval to null
 *  3. intervals overlap, update newInterval
 *  4. newInterval has already been added and there are more intervals to iterate through
 *  5. newInterval goes into the end of the result arr
 */

const insertintervals = (intervals, newInterval) => {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (!newInterval || newInterval[0] > interval[1]) {
      result.push(interval);
    } else if (newInterval[1] < interval[0]) {
      result.push(newInterval, interval);
      newInterval = null;
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }

  if (newInterval) result.push(newInterval);
  return result;
};

const intervals = [
  [1, 3],
  [6, 9],
];

const intervals2 = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];

const newInterval = [2, 5];
const newInterval2 = [4, 8];
const mergedIntervals = insertintervals(intervals, newInterval); // [[1,5],[6,9]]
const mergedIntervals2 = insertintervals(intervals2, newInterval2); // [[1,2],[3,10],[12,16]]
console.log(mergedIntervals2);
