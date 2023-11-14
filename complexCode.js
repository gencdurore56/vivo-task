// Filename: complexCode.js

/**
 * Complex Code Example
 * 
 * This code demonstrates a complex implementation using JavaScript.
 * It showcases various advanced concepts and techniques to solve a problem.
 * 
 * Problem Statement:
 * Given a list of numbers, find the largest sequence of consecutive
 * numbers whose sum is equal to a given target sum. Return the sequence
 * of numbers if found, otherwise return an empty array.
 * 
 * Approach:
 * 1. Generate all possible sub-sequences of numbers from the given list.
 * 2. For each sub-sequence, check if the sum is equal to the target sum.
 * 3. Keep track of the largest sub-sequence found so far.
 * 4. Return the largest sub-sequence if found, otherwise return an empty array.
 * 
 * Code Outline:
 * - A function to generate all possible sub-sequences of numbers.
 * - A function to check if a given sequence has the target sum.
 * - The main function to solve the problem using the above functions.
 */

/**
 * Function to generate all possible sub-sequences of numbers.
 * 
 * @param {Array} numbers - List of numbers
 * @returns {Array} - List of all sub-sequences
 */
function generateSubsequences(numbers) {
  const subsequences = [];
  const generate = (current, index) => {
    if (index === numbers.length) {
      if (current.length > 0) {
        subsequences.push(current);
      }
    } else {
      generate(current.concat(numbers[index]), index + 1);
      generate(current, index + 1);
    }
  };
  generate([], 0);
  return subsequences;
}

/**
 * Function to check if the given sequence has the target sum.
 * 
 * @param {Array} sequence - List of numbers
 * @param {number} target - Target sum
 * @returns {boolean} - True if the sum is equal to the target, false otherwise
 */
function hasTargetSum(sequence, target) {
  let sum = 0;
  for (const num of sequence) {
    sum += num;
  }
  return sum === target;
}

/**
 * Function to find the largest sequence of consecutive numbers
 * whose sum is equal to a given target sum.
 * 
 * @param {Array} numbers - List of numbers
 * @param {number} target - Target sum
 * @returns {Array} - Largest sub-sequence if found, otherwise an empty array
 */
function findLargestSequence(numbers, target) {
  let largestSequence = [];
  const subsequences = generateSubsequences(numbers);
  for (const subsequence of subsequences) {
    if (hasTargetSum(subsequence, target)) {
      if (largestSequence.length < subsequence.length) {
        largestSequence = subsequence;
      }
    }
  }
  return largestSequence;
}

// Usage example:
const numbers = [1, 2, 3, 4, 5, 6, 7];
const targetSum = 9;
const result = findLargestSequence(numbers, targetSum);

console.log('Largest Sequence:', result);
