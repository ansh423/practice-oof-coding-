// formula.js

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}


function mul(a, b) {
    return a * b;
}


function div(a, b) {
    return a / b;
}


// Correct way to export
module.exports = {
    add, 
    sub, 
    mul, 
    div,
};  // Note: 'module' should be lowercase
