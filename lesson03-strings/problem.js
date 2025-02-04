/*
Problem:

You are given a text string and a pattern string. Your task is to implement a string matching algorithm that finds all occurrences of the pattern in the text.

Write a function `stringMatching(text, pattern)` that takes in two strings as arguments and returns an array of indices where the pattern is found in the text. If the pattern is not found, return an empty array.

Example:

Input:
text = "ababcababcabc"
pattern = "abc"

Output:
[2, 7, 10, 13]

Input:
text = "hello world"
pattern = "xyz"

Output:
[]

Note:
- The matching should be case-sensitive.
- The indices should be 0-based.

*/

function stringMatching(text, pattern) {
  // TODO: Implement the string matching algorithm
  // Return an array of indices where the pattern is found in the text
  // If the pattern is not found, return an empty array
  const result = [];
  if (!text || !pattern) {
    return result;
  }
  const n = text.length;
  const m = pattern.length;

  for (let i = 0; i <= n - m; i++) {
    if (text.substring(i, i + m) === pattern) {
      result.push(i);
    }
  }
  return result;
}

module.exports = stringMatching;
