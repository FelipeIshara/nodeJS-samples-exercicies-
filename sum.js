const prompt = require('prompt-sync')();
const num1 = parseInt(prompt('Insert a number: '))
const num2 = parseInt(prompt('Insert a number: '))

function sum(a, b){
    c = a + b;
    return c;
}

console.log(sum(num1, num2));