import SortingContext from "./context/sortingContext";
import Navbar from "./components/navbar/navbar";
import Visualizer from "../src/components/visualizer/visualizer.js";
import useSorting from "./scripts/hooks/useSorting";

const defaultValues = {
  algorithm: "Merge Sort",
  arrSize: 25,
  sortSpeed: 25,
};

function App() {
  const { array, animation, settings } = useSorting(defaultValues);

  return (
    <div className="App">
      <SortingContext.Provider value={{ array, animation, settings }}>
        <Navbar />
        <Visualizer />
      </SortingContext.Provider>
    </div>
  );
}

export default App;
