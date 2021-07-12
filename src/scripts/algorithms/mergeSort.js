/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: mergeSort.js
 Date: JUN_11_2021
 
 Abstract: Merge Sort uses a mid point to constantly split an array into smaller sub-arrays until only one element remains on the right
 and left sub-array. This way, it is automatically sorted b/c it contains one element. Then it recursivley exits its calls, sorting and 
 merging the left and right sub-arrays of wherever the function is in the tree, until it finally fully merges into a sorted array. 
***************************************************************************************************************************************/

import { highlightIdx, clearIdx } from "./util";

let globalSnapshot = [];
let globalArr = [];

const mergeSort = (arr) => {
  globalArr = [...arr];
  globalSnapshot = [[...arr]];
  mergeSortHelper(globalArr);

  // Algorithm finished Sorting
  globalSnapshot[globalSnapshot.length - 1].forEach((idx) => {
    idx.highlighted = false;
    idx.sorted = true;
  });
  return globalSnapshot;
};

const mergeSortHelper = (arr) => {
  if (arr === null) {
    return;
  }
  let i = 0;
  let j = 0;
  let k = 0;

  if (arr.length > 1) {
    const mid = parseInt(arr.length / 2);

    // Split left part
    //const left = arr.slice(0, mid);
    const left = new Array(mid).fill(0);
    for (i = 0; i < mid; i++) {
      left[i] = arr[i];
    }

    // Split right part
    //const right = arr.slice(mid, arr.length);
    const right = new Array(arr.length - mid).fill(0);
    for (i = mid; i < arr.length; i++) {
      right[i - mid] = arr[i];
    }

    mergeSortHelper(left);
    mergeSortHelper(right);

    i = 0;
    j = 0;

    // Merge left and right arrays
    while (i < left.length && j < right.length) {
      if (left[i].value < right[j].value) {
        arr[k] = left[i];
        globalArr[k] = arr[k];
        highlightIdx(globalArr, k);
        highlightIdx(globalArr, i);
        globalSnapshot.push([...globalArr]);
        clearIdx(globalArr, k);
        clearIdx(globalArr, i);
        i++;
      } else {
        arr[k] = right[j];
        globalArr[k] = arr[k];
        highlightIdx(globalArr, k);
        highlightIdx(globalArr, i);
        globalSnapshot.push([...globalArr]);
        clearIdx(globalArr, k);
        clearIdx(globalArr, i);
        j++;
      }
      k++;
    }
    // Collect remaining elements
    while (i < left.length) {
      arr[k] = left[i];
      globalArr[k] = arr[k];
      highlightIdx(globalArr, k);
      highlightIdx(globalArr, i);
      globalSnapshot.push([...globalArr]);
      clearIdx(globalArr, k);
      clearIdx(globalArr, i);
      i++;
      k++;
    }
    while (j < right.length) {
      arr[k] = right[j];
      globalArr[k] = arr[k];
      highlightIdx(globalArr, k);
      highlightIdx(globalArr, j);
      globalSnapshot.push([...globalArr]);
      clearIdx(globalArr, k);
      clearIdx(globalArr, j);
      j++;
      k++;
    }
  }
};

export default mergeSort;
