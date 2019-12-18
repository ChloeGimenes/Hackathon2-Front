import React from "react";

import "./style.scss";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="follow">
          <div class="icon first"></div>
          <div class="icon"></div>
          <div class="icon"></div>
          <div class="icon last"></div>
          <div class="label">MAX</div>
        </div>
        <div class="share">
          <div class="icon first"></div>

          <div class="label">MILAN</div>
        </div>
        <button class="try">
          <span class="text">CHLOE</span>
        </button>
        <button class="buy">
          <span class="price">
            <small></small>flow
          </span>
          <span class="text">FLO</span>
        </button>
      </div>
    </div>
  );
}

export default App;
