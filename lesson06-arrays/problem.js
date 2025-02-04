// Prompt: Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the largest element, or return -1 otherwise.

/**
 * Checks if the largest element in the array is at least twice as much as every other number.
 * @param {number[]} nums - The integer array.
 * @returns {number} - The largest element if it meets the condition, otherwise -1.
 */
function checkLargestElement(nums) {
  if (nums.length === 0) return -1;

  let max = Math.max(...nums);
  for (let num of nums) {
    if (num !== max && max < 2 * num) {
      return -1;
    }
  }
  return max;
}

module.exports = checkLargestElement;
