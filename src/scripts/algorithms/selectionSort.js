/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: selectionSort.js
 Date: JUN_10_2021
 
 Abstract: Selection sort iterates through an array while constantly storing the minimum valued idx. When a new minimum is selected, the
 idx is highlighted. And when the min of the entire iteration is selected, the current idx i and the min found through iterating through
 the array is swapped. This is done until all idx's become the current i.
***************************************************************************************************************************************/
import { highlightIdx, clearIdx } from "./util";

const selectionSort = (unsortedArray) => {
  let arr = [...unsortedArray];
  let arrSnapshot = [[...arr]];
  let len = arr.length;
  let temp, min;

  for (let i = 0; i < len; i++) {
    min = i;
    // Iterate through array and keep track of min value
    for (let j = i + 1; j < len; j++) {
      highlightIdx(arr, j);
      highlightIdx(arr, min);
      arrSnapshot.push([...arr]);
      clearIdx(arr, j);
      // Set new min
      if (arr[j].value < arr[min].value) {
        clearIdx(arr, min);
        min = j;
        highlightIdx(arr, min);
      }
      clearIdx(arr, j);
    }
    // Swap min to least signifigant index
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = { ...temp };
    arr[i] = { ...arr[i], sorted: true };
    arrSnapshot.push([...arr]);
  }

  return arrSnapshot;
};

export default selectionSort;
