/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: heapSort.js
 Date: JUN_16_2021
 
 Abstract: Heap sort creates Max Heaps out of the unsorted array. Max heaps are binary trees in which the parent node's value is always
 greater than the children. For every i index is used to describe each array elements position in the heap. Then the highest node 
 (the greatest value) is sorted into the highest index of your sorted array, and a method used heapify is called to maintain the max
 heap. Heapify finds the max value index and swaps it with the highest parent node. 
***************************************************************************************************************************************/
import { swap, highlightIdx, clearIdx } from "./util";

let globalSnapshot = [];
let globalArr = [];

const heapSort = (arr) => {
  globalArr = [...arr];
  globalSnapshot = [[...arr]];
  let len = arr.length;
  let i = 0;

  // Build Max Heap
  for (i = Math.floor(len / 2 - 1); i >= 0; i--) heapify(globalArr, len, i);

  // Extract elements from the heap and move to sorted container
  for (i = arr.length - 1; i >= 0; i--) {
    // Move root to the end
    swap(globalArr, 0, i);
    globalSnapshot.push([...globalArr]);
    len--;
    // Creating new max heap after removing max element
    heapify(globalArr, len, 0);
  }
  // Algorithm finished Sorting
  globalSnapshot[globalSnapshot.length - 1].forEach((idx) => {
    idx.highlighted = false;
    idx.sorted = true;
  });
  return globalSnapshot;
};

const heapify = (arr, length, i) => {
  // Define binary tree idx's
  let max = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  const len = length;

  // If left child > root
  if (left < len && arr[left].value > arr[max].value) {
    max = left;
  }
  // If right child > root
  if (right < len && arr[right].value > arr[max].value) {
    max = right;
  }
  //If max != root, set new max
  if (max !== i) {
    highlightIdx(globalArr, i);
    highlightIdx(globalArr, max);
    swap(globalArr, i, max);
    globalSnapshot.push([...globalArr]);
    clearIdx(globalArr, i);
    clearIdx(globalArr, max);
    heapify(globalArr, len, max);
  }
};

export default heapSort;
