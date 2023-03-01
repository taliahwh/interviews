/**
 * Brute Force Solution: Nested Loops
 *
 * Iterate through array and for each value:
 *
 * - Check if proceeding value is greater than current value
 * -- If it is -> increase and return the count
 * -- if it isn't -> increase count and move to next iteration in nested loop
 * - If there is no value greater than current temp, set answer[i] = 0
 * - If at last iteration, set answer[i] = 0;
 */
// Time: O(n^2)
// Space: O(n)
const dailyTemperatures = (temperatures) => {
  if (!temperatures.length) return [];
  const answer = [];
  // set last value in answer to 0, since there are no future days
  answer[temperatures.length - 1] = 0;

  // iterate up until the second to last value in temperatures arr
  for (let i = 0; i < temperatures.length - 1; i++) {
    const currentDay = temperatures[i];
    let count = 0; // value to track how many days until warmer day

    for (let j = i + 1; j < temperatures.length; j++) {
      const futureDay = temperatures[j];

      if (j === temperatures.length - 1 && futureDay <= currentDay) {
        answer[i] = 0;
        break;
      }

      if (futureDay > currentDay) {
        count++;
        answer[i] = count;
        count = 0;
        break;
      } else {
        count++;
      }
    }
  }

  return answer;
};

console.log(dailyTemperatures([34, 80, 80, 80, 34, 80, 80, 80, 34, 34])); // [1,0,0,0,1,0,0,0,0,0]
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
// console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
// console.log(dailyTemperatures([30, 60, 90])); // [1,1,0]
// console.log(dailyTemperatures([3])); // [0]
// console.log(dailyTemperatures([])); // []
