var chocolateBars = ["snickers", "hundred-grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  [element, ...array];
  return chocolateBars;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  array = [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, indexOf) {
  console.log(array[1]);
}
