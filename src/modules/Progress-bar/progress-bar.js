import React from "react";
import "./progress-bar.css";

function ProgressBar() {
  return (
    <div className="Section-1">
      <div className=" text-time">
        <h1> - Time 1.5Hr -</h1>
      </div>
      <div className="button">
        <input className="input-number" type="number" min={1} placeholder="2" />
        <button
          className="start-btn"
          //   onClick={clickOn}
        >
          Start
        </button>
      </div>
      <div className="progress-bar">
        <div className="progress-fill">
          <progress value={5} />
          {/* <span className="progress-text">100%</span> */}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
