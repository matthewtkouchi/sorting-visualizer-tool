/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: insertionSort.js
 Date: JUN_9_2021
 
 Abstract: Contains Insertion sort algorithm which uses two loops with independent iterators to keep track of the sorted and unsorted 
 section of the array. The unsorted section has a current element that is tracked throughout the sort. Each current element is inserted
 into the sorted array at the right position.
***************************************************************************************************************************************/

import { swap, highlightIdx, clearIdx } from "./util";

const insertionSort = (unsortedArray) => {
  // Declare Local Variables
  let arr = [...unsortedArray];
  let arrSnapshot = [[...arr]]; // Each Idx contains an array snapshot
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const current = arr[i].value;
    let j = i - 1;
    while (j >= 0 && arr[j].value > current) {
      highlightIdx(arr, j);
      //Swap to prevent duplicate values at multiple indexes
      swap(arr, j + 1, j);
      //Take snap and decrement
      highlightIdx(arr, j + 1);
      arrSnapshot.push([...arr]);
      clearIdx(arr, j + 1);
      j--;
    }
    clearIdx(arr, j);
    //Set next current value
    arr[j + 1].value = current;
    arrSnapshot.push([...arr]);
  }

  // Reset Props to Initials
  arrSnapshot[arrSnapshot.length - 1].forEach((idx) => {
    idx.highlighted = false;
    idx.sorted = true;
  });

  return arrSnapshot;
};

export default insertionSort;
