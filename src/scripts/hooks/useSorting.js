/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: useSorting.js
 Date: MAY_31_2021
 
 Abstract: Contains custom hook (useSorting), which contains state hooks for different sorting options. After default states are set
 event handlers are decalared to use the set sorting options. These include resetting the current array to a new random array, 
 stopping the current sort, starting the current sort, and event handlers that reset the array if an input is changed mid sort. 
***************************************************************************************************************************************/
import sortingAlgorithms from "../algorithms/sortingAlgorithm";

import { useState, useEffect, useCallback } from "react";
import { generateRandomArr } from "../algorithms/util";

const useSorting = (e) => {
  const [arrSize, setArrSize] = useState(e.arrSize);
  const [algorithm, setAlgorithm] = useState(e.algorithm);
  const [sortSpeed, setSortSpeed] = useState(e.sortSpeed);
  const [currentArray, setCurrentArray] = useState(() =>
    generateRandomArr(arrSize)
  );

  // Reset the Array
  const resetArray = useCallback(() => {
    setCurrentArray(generateRandomArr(arrSize));
  }, [arrSize]);

  // Start Animating the Sort
  const startAnimating = () => {
    const arrSnapshot = sortingAlgorithms[algorithm](currentArray);
    const len = arrSnapshot.length;
    for (let i = 0; i < len; i++) {
      setTimeout(() => {
        setCurrentArray(arrSnapshot[i]);
      }, (i + 1) * parseInt(sortSpeed));
    }
  };

  // Stop Sorting
  const stopAnimating = useCallback(() => {
    let timeoutId = setTimeout(() => null, 0);
    while (timeoutId >= 0) {
      clearTimeout(timeoutId);
      timeoutId--;
    }
  }, []);

  // Update Array In the Event of an Input Change During a Sort
  useEffect(() => {
    stopAnimating();
    resetArray();
  }, [algorithm, sortSpeed, arrSize, resetArray, stopAnimating]);

  // Return props to control the array's state, animations, and configurations

  return {
    array: { currentArray },
    animation: { startAnimating, stopAnimating, resetArray },
    settings: {
      algorithm,
      arrSize,
      sortSpeed,
      setAlgorithm,
      setArrSize,
      setSortSpeed,
    },
  };
};

export default useSorting;
