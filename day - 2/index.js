// app.js

// Import the module
const math = require('./formula');  // math is the object containing exported functions

const a = 5;
const b = 3;

// Use the function
console.log(math.add(a, b));  // Output: 5
console.log(math.sub(a, b));  // Output: 2
console.log(math.mul(a, b));  // Output: 15
console.log(math.div(a, b));  // Output: 1.6666666666666667
