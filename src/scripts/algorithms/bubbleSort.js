/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: bubbleSort.js
 Date: JUN_1_2021
 
 Abstract: Contains Bubble Sort Algorithm which iterates through an unsorted array, swapping at unsorted indexes. The highlighted
 indexes are chosen and set for animation through prop management. This occurs until the array doesn't swap through an iteration. At
 this point the snapshot container's array indexes are un-highlighted and the container is returned.
***************************************************************************************************************************************/

import { swap, highlightIdx, clearIdx } from "./util";

const bubbleSort = (unsortedArray) => {
  // Declare Local Variables
  let arr = [...unsortedArray];
  let arrSnapshot = [[...arr]]; // Each Idx contains an array snapshot
  const len = arr.length;
  let isSwapping;
  do {
    isSwapping = false;
    for (let i = 0; i < len - 1; i++) {
      // If Idx is > Idx + 1
      if (arr[i].value > arr[i + 1].value) {
        // Swap Idx Values, Highlight current Idx and Give Idx Props, Store Array Instance
        swap(arr, i, i + 1);
        highlightIdx(arr, i);
        highlightIdx(arr, i + 1);
        arrSnapshot.push([...arr]);

        // Reset highlight props
        clearIdx(arr, i);
        clearIdx(arr, i + 1);
        isSwapping = true;

        // Else if Idx is < Idx + 1
      } else {
        highlightIdx(arr, i);
        highlightIdx(arr, i + 1);
        arrSnapshot.push([...arr]);
        clearIdx(arr, i);
        clearIdx(arr, i + 1);
      }
    }
  } while (isSwapping);

  // Reset Props to Initials
  arrSnapshot[arrSnapshot.length - 1].forEach((idx) => {
    idx.highlighted = false;
    idx.sorted = true;
  });

  // Return a Sorted Array
  return arrSnapshot;
};

export default bubbleSort;
