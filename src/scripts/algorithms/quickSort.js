/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: quickSort.js
 Date: JUN_6_2021
 
 Abstract: Quick sort uses a pivot and partitions the array to have indexes with lesser values on one side and with greater values on
 the opposite side. Then afer setting a new pivot by ... , the array is partitioned again. This is done by recursivley calling 
 quick sort on both sides of the pivot (both sides essentially act as individual arrays) This goes on until the starting idx is equal to 
 or greater than the end idx, meaning each partition is just a single element.  
***************************************************************************************************************************************/

import { swap, highlightIdx, clearIdx } from "./util";

let globalSnapshot = [];
let globalArr = [];

const quickSort = (arr) => {
  const start = 0;
  const end = arr.length - 1;
  globalArr = arr;
  globalSnapshot = [[...arr]];

  quickSortHelper(globalArr, start, end);

  // Algorithm finished Sorting
  globalSnapshot[globalSnapshot.length - 1].forEach((idx) => {
    idx.highlighted = false;
    idx.sorted = true;
  });

  return globalSnapshot;
};

const quickSortHelper = (arr, start, end) => {
  if (start >= end) {
    return;
  }

  // Get pivot point
  const index = partition(arr, start, end);

  // Recursivley call helper function on both sides of the pivot
  quickSortHelper(globalArr, start, index - 1);
  quickSortHelper(globalArr, index + 1, end);
};

const partition = (arr, start, end) => {
  let pivotValue = arr[end].value;
  let pivotIndex = start;

  // Move values < pivot to left of pivot, and values > pivot to right of pivot
  for (let i = start; i < end; i++) {
    highlightIdx(arr, i);
    highlightIdx(arr, pivotIndex);
    if (arr[i].value < pivotValue) {
      swap(arr, i, pivotIndex);
      globalArr = arr;
      globalSnapshot.push([...arr]);
      clearIdx(arr, pivotIndex);
      clearIdx(arr, i);
      pivotIndex++;
    }
    globalSnapshot.push([...arr]);
    clearIdx(arr, pivotIndex);
    clearIdx(arr, i);
  }

  swap(arr, pivotIndex, end);
  globalArr = arr;
  globalSnapshot.push([...arr]);

  return pivotIndex;
};

export default quickSort;
