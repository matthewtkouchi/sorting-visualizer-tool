/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: util.js
 Date: MAY_31_2021
 
 Abstract: Contains useful functions that are re-used by multiple files. These include generateRandomArr(size) which pushes random 
 integers into an initialized array, swap(array, initIdx, swpIdx) which swaps two array idx's.
***************************************************************************************************************************************/
function getIntFromTo(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateRandomArr = (size) => {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    arr.push({
      value: getIntFromTo(10, 1000),
      highlighted: false,
      sorted: false,
    });
  }
  return arr;
};

export const swap = (array, initIdx, swpIdx) => {
  if (initIdx === swpIdx) {
    return;
  }
  let temp = array[initIdx];
  array[initIdx] = { ...array[swpIdx] };
  array[swpIdx] = { ...temp };
};

export const highlightIdx = (arr, idx) => {
  arr[idx] = { ...arr[idx], highlighted: true };
};

export const clearIdx = (arr, idx) => {
  arr[idx] = { ...arr[idx], highlighted: false };
};
