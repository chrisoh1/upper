
function addUpper(arr) {
  return _.map(arr, function (num) {
    return `${num} ${num.toUpperCase()}`;
  });
}

console.log(addUpper(['apple', 'pear']));
addUpper(['you', 'can', 'win']);
