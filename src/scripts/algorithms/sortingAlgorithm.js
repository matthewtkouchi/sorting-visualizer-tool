/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: sortingAlgorithm.js
 Date: JUN_1_2021
 
 Abstract: Contains an algorithm object that holds algorithms under a specific named property. Each string corresponds to a defined function
 imported from other algorithm files.
***************************************************************************************************************************************/

import bubbleSort from "./bubbleSort";
import insertionSort from "./insertionSort";
import quickSort from "./quickSort";
import mergeSort from "./mergeSort";
import heapSort from "./heapSort";
import selectionSort from "./selectionSort";

const sortingAlgorithms = {
  "Bubble Sort": bubbleSort,
  "Quick Sort": quickSort,
  "Insertion Sort": insertionSort,
  "Merge Sort": mergeSort,
  "Heap Sort": heapSort,
  "Selection Sort": selectionSort,
};

export default sortingAlgorithms;
