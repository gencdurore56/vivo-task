/*
Filename: AdvancedDataProcessing.js

This script demonstrates advanced data processing techniques using JavaScript.
It includes functions for sorting, filtering, mapping, and reducing data.

Author: Your Name
Date: DD/MM/YYYY
*/

// Generate an array of 1000 random integers between 1 and 1000
const data = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000) + 1);

// Sort data in descending order
const sortedData = data.sort((a, b) => b - a);

// Filter out odd numbers
const evenNumbers = sortedData.filter(num => num % 2 === 0);

// Map even numbers to their squares
const squares = evenNumbers.map(num => num ** 2);

// Reduce squares to get the sum
const sum = squares.reduce((acc, curr) => acc + curr, 0);

// Calculate the average of the even numbers
const average = sum / evenNumbers.length;

// Find the maximum and minimum values in the evenNumbers array
const max = Math.max(...evenNumbers);
const min = Math.min(...evenNumbers);

// Display the results
console.log("Sorted data:", sortedData);
console.log("Even numbers:", evenNumbers);
console.log("Squared even numbers:", squares);
console.log("Sum of squared even numbers:", sum);
console.log("Average of even numbers:", average);
console.log("Maximum even number:", max);
console.log("Minimum even number:", min);

// Other complex logic and functions can be added below

// ...

// End of code