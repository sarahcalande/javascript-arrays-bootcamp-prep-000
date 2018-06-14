var array = []

var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,x){
  [x, ...array]
  
}


function destructivelyAddElementToBeginningOfArray(array,y){
  array.unshift(y);
  
  
}

function addElementToEndOfArray(array, a){
    [array, ...a]
}

function destructivelyAddElementToEndOfArray(array, z){
  array.push(z);
  
}

function accessElementInArray(array){
  return [0]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift;
}

function removeElementFromEndOfArray(array){
  array.pop;
}
//**TODO**: Define a function in `arrays.js` called `removeElementFromEndOfArray` that takes an array as its only argument and removes the last element. Your function should return the array without the last element, and it **should not** mutate the original array.

