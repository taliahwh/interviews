// Time: O(Nlog(N))
// Space: O(N)
const mergeIntervals = (intervals) => {
  // init result arr
  const result = [];

  // init prevArr that'll be used to compare intervals
  let prevArr = [];

  // can't assume that intervals are in sorted order.. sort input arr first
  intervals.sort((a, b) => a[0] - b[0]);

  // iterate through intervals array with for loop
  for (let i = 0; i < intervals.length; i++) {
    // destructure to read start/end vals
    const [curStart, curEnd] = intervals[i];

    // if prevArr is empty, we'll know that we're looking at the first interval in input arr
    // store its value in prevArr to compare with next interval
    if (!prevArr.length) {
      // console.log('!prevArr.length');
      prevArr[0] = curStart;
      prevArr[1] = curEnd;
    } else if (curStart <= prevArr[1]) {
      // if the curStart <= prevEnd we'll know that we have some overlapping intervals
      // and will want to merge the two and update the prevArr
      // merge intervals:
      prevArr = [Math.min(prevArr[0], curStart), Math.max(prevArr[1], curEnd)];
    } else {
      // console.log('result.push(prevArr)');
      // in this case we know that there aren't any overlapping intervals at this point
      // in the iteration and that there is content in prevArr.. push that into result
      // and update prevArr to be the current interval so that we can check for future
      // overlapping intervals
      result.push(prevArr.slice());
      // console.log('updated result', result);
      prevArr[0] = curStart;
      prevArr[1] = curEnd;
    }
  }
  result.push(prevArr.slice());

  return result;
};

const intervals1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

const intervals2 = [
  [1, 4],
  [4, 5],
];

const intervals3 = [
  [14, 19],
  [17, 25],
  [26, 33],
  [31, 40],
  [40, 49],
]; // -> [ [14,25],[26,40],[40,49] ]

const intervals4 = [
  [1, 4],
  [0, 0],
]; // -> [0,0], [1,4]

console.log(mergeIntervals(intervals1));
console.log(mergeIntervals(intervals2));
console.log(mergeIntervals(intervals3));
console.log(mergeIntervals(intervals4));
