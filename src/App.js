import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProgressBar from "./modules/Progress-bar/progress-bar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <ProgressBar />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
