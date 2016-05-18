/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...

var radius = 2,
    circumference = 2 * radius * 3.141592653589793,
    area = (radius * radius) * 3.141592653589793
;

console.log("The circumference is " + circumference + ".");
console.log("The area is " + area + ".");
