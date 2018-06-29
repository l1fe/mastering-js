var bulkMakeFunctions = require('./index.js');

const addFuncStr = 'function(a,b) { return a + b; }';
const subFuncStr = 'function(a, b) { return a - b; }';
const mulFuncStr = 'function(a, b) { return a * b; }';
const divFuncStr = 'function(a, b) { return a / b; }';

const [add, sub, mul, div] = bulkMakeFunctions(addFuncStr, subFuncStr, mulFuncStr, divFuncStr);

const result = div(mul(add(1, 2), sub(3, 1)), 3);
console.log(result);
