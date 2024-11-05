// This script calculates the area and perimeter of a rectangle and a triangle using expressions with variables in JavaScript.

const length = 10;
const height = 5;

const rectangleArea = length * height;

const rectanglePerimeter = 2 * (length + height);

console.log("Rectangle area: ", rectangleArea)
console.log("Rectangle perimeter: ", rectanglePerimeter)

const base = 8;
const triangleHeight = 4;
const side1 = 5;
const side2 = 7;

const triangleArea = (base * triangleHeight) / 2;
const trianglePerimeter = base + side1 + side2;

console.log("Triangle Area: ", triangleArea);
console.log("Triangle area: ", trianglePerimeter);

