/* Filename: ComplexCode.js
   Content: Complex code showcasing advanced JavaScript concepts */

// Helper function to generate a random number within a range
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Object representing a car
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
  }

  accelerate() {
    this.speed += randomNumber(1, 10);
  }

  brake() {
    this.speed -= randomNumber(1, 5);
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
}

// Array of car objects
const cars = [
  new Car("Toyota", "Corolla", 2020),
  new Car("Honda", "Accord", 2019),
  new Car("Ford", "Mustang", 2018),
  new Car("Chevrolet", "Camaro", 2017)
];

// Function to display car details
function displayCarDetails(car) {
  console.log("---------------------------------------");
  console.log("Make:", car.make);
  console.log("Model:", car.model);
  console.log("Year:", car.year);
  console.log("Speed:", car.speed);
  console.log("---------------------------------------");
}

// Display initial car details
console.log("Initial Car Details");
cars.forEach(displayCarDetails);

// Simulate driving the cars
console.log("Simulating Driving...");
for (let i = 0; i < 10; i++) {
  cars.forEach(car => {
    car.accelerate();
    car.brake();
  });
}

// Display final car details
console.log("Final Car Details");
cars.forEach(displayCarDetails);

// Function to get the average speed of all cars
function getAverageSpeed() {
  let totalSpeed = 0;
  cars.forEach(car => {
    totalSpeed += car.speed;
  });

  return totalSpeed / cars.length;
}

// Display average speed
console.log("Average Speed:", getAverageSpeed());

// Array of colors
const colors = ["red", "blue", "green", "yellow", "purple"];

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

// Shuffle colors array
const shuffledColors = shuffleArray(colors);

// Display shuffled colors
console.log("Shuffled Colors:", shuffledColors); 

// Check if a number is prime
function isPrimeNumber(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  
  const sqrt = Math.sqrt(num);
  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  
  return true;
}

// Find prime numbers from 1 to 100
const primes = [];
for (let i = 1; i <= 100; i++) {
  if (isPrimeNumber(i)) {
    primes.push(i);
  }
}

// Display prime numbers
console.log("Prime Numbers:", primes);

// Complex nested function example
const doSomethingComplex = () => {
  const innerFunction1 = (num) => {
    const result = num * 2;
    return result;
  }

  const innerFunction2 = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
  }

  const complexCalculation = (num1, num2, num3) => {
    const doubledValue = innerFunction1(num1);
    const summedValue = innerFunction2(num2, num3);
    const result = doubledValue + summedValue;
    return result;
  }

  console.log("Complex Calculation Result:", complexCalculation(5, 10, 15));
}

// Execute complex nested function
doSomethingComplex();

// ...continued with more complex code beyond 200 lines