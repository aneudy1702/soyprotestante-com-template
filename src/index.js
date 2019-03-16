import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";
import SocialBar from "./components/SocialBar";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <SocialBar />
      <NavBar />
      <div className="container-fluid">
        hero banner / video player full width
      </div>
      <div className="container">films</div>
      <div>{" para la gloria de Dios "}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
