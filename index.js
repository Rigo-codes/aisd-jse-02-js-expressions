// This script calculates the area and perimeter of a rectangle and a triangle using expressions with variables in JavaScript.

// Define variables for rectangle dimensions
const length = 10;
const height = 5;

// Calculate area and perimeter of the rectangle
const rectangleArea = length * height;
const rectanglePerimeter = 2 * (length + height);

// Log rectangle results to console
console.log("Rectangle Area:", rectangleArea);
console.log("Rectangle Perimeter:", rectanglePerimeter);

// Define variables for triangle dimensions
const base = 8;
const triangleHeight = 4;
const side1 = 5;
const side2 = 7;

// Calculate area and perimeter of the triangle
const triangleArea = (base * triangleHeight) / 2;
const trianglePerimeter = base + side1 + side2;

// Log triangle results to console
console.log("Triangle Area:", triangleArea);
console.log("Triangle Perimeter:", trianglePerimeter);
