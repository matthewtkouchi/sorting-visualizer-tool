/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: visualizer.js
 Date: JUN_4_2021
 
 Abstract: Contains the visualizer where the array container resides. The visualizer uses the Sorting Context of the project to map
 the entire current array to the screen. The map function renders the arrays index's and gives it a height based on the index's value
 which is assigned when the array is generated.
***************************************************************************************************************************************/

import "../../css/visualizer.css";
import React, { useContext } from "react";
import Bar from "../../css/styled/bar";

import SortingContext from "../../context/sortingContext";

const Visualizer = () => {
  const { array, settings } = useContext(SortingContext);

  return (
    <>
      <h3 className="title">Sorting Algorithm: {settings.algorithm}</h3>
      <div className="array-container">
        {array.currentArray.map(({ value, highlighted, sorted, idx }) => {
          return (
            <Bar
              key={idx}
              highlighted={highlighted}
              sorted={sorted}
              height={`${value / 2}px`}
              width={`${200 / array.currentArray.length}px`}
            ></Bar>
          );
        })}
      </div>
    </>
  );
};

export default Visualizer;
