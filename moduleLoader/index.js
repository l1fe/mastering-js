// Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

function bulkMakeFunctions() {
  const len = arguments.length;

  let str = '';
  let i = 1;

  if (len) {
    str = arguments[0];
    while (i < len) {
      str += ',' + arguments[i];
      ++i;
    }
  }

  console.log(`Loaded ${len} modules`);

  return Function(`"use strict"; return [${str}]`)();
}

module.exports = bulkMakeFunctions;
