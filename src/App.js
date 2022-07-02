import { createContext, useState } from "react";
import "./App.css";
import University from "./components/University";

export const TourContext = createContext();

function App() {
  const announcement = "Sports";
  const [count, setCount] = useState(0);
  const tour = "Bandarban, Chottogram"
  return (
    <TourContext.Provider value={tour}>
      <div className="App">
        <button onClick={() => setCount((prev) => prev + 1)}>
          Increase value
        </button>
        <h1>University</h1>
        <University count={count} announcement={announcement} />
      </div>
    </TourContext.Provider>
  );
}

export default App;
