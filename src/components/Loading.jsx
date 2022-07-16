import React from "react";

const Loading = () => {
  return (
    <div className="flex__wrapper">
      <div class="loading">
        <div className="dot">L</div>
        <div className="dot">O</div>
        <div className="dot">A</div>
        <div className="dot">D</div>
        <div className="dot">I</div>
        <div className="dot">N</div>
        <div className="dot">G</div>
        <span className="text">FETCHING COUNTRIES...</span>
      </div>
    </div>
  );
};

export default Loading;
