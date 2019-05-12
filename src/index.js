import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.css";
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const App = function() {
  return (
    <div className="test">
      测试
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
