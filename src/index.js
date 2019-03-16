import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">social bar full width</div>
      <div className="container-fluid">nav bar full width</div>
      <div className="container-fluid">
        hero banner / video player full width
      </div>
      <div className="container">films</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
