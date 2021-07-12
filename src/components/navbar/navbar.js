/***************************************************************************************************************************************
 Name: Matthew Kouchi
 File: navbar.js
 Date: MAY_31_2021
 
 Abstract: Contains styled components used for collecting user input including buttons and select elements. The collected inputs are 
 passed through state hooks to update the SortingContext object used to control the visualizer. These updates affect the visualizer in
 real time, updating the array using onClick/onChange functions on each button.
***************************************************************************************************************************************/

import React, { useContext } from "react";
import InputButton from "../../css/styled/button";
import Nav from "../../css/styled/nav";

import "../../css/navbar.css";
import SortingContext from "../../context/sortingContext";

// Navbar Component
const Navbar = () => {
  const { animation, settings } = useContext(SortingContext);

  const selectAlgorithm = () => {
    const updateAlgorithm = (e) => {
      settings.setAlgorithm(e.target.value);
    };

    return (
      <Nav>
        <>
          <InputButton
            type="button"
            value="Heap Sort"
            onClick={updateAlgorithm}
          />
          <InputButton
            type="button"
            value="Bubble Sort"
            onClick={updateAlgorithm}
          />
          <InputButton
            type="button"
            value="Quick Sort"
            onClick={updateAlgorithm}
          />
          <InputButton
            type="button"
            value="Merge Sort"
            onClick={updateAlgorithm}
          />
          <InputButton
            type="button"
            value="Insertion Sort"
            onClick={updateAlgorithm}
          />
          <InputButton
            type="button"
            value="Selection Sort"
            onClick={updateAlgorithm}
          />
        </>
      </Nav>
    );
  };

  const selectSpeed = () => {
    return (
      <label>
        Sorting Speed
        <select
          value={settings.sortSpeed}
          onChange={(e) => settings.setSortSpeed(e.target.value)}
        >
          <option value={60}>Slow</option>
          <option value={35}>Normal</option>
          <option value={20}>Fast</option>
          <option value={10}>Super Fast</option>
          <option value={1}>Max</option>
        </select>
      </label>
    );
  };

  const selectSize = () => {
    return (
      <label>
        Size of Array
        <select
          value={settings.arrSize}
          onChange={(e) => settings.setArrSize(e.target.value)}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
        </select>
      </label>
    );
  };

  const playAnimation = () => {
    return (
      <>
        <InputButton
          type="button"
          value="Start Sorting"
          onClick={() => animation.startAnimating()}
        />
      </>
    );
  };

  return (
    <form>
      {selectAlgorithm()}
      {selectSpeed()}
      {selectSize()}
      {playAnimation()}
    </form>
  );
};

export default Navbar;
