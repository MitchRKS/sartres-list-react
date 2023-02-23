import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Article } from "./Components";
import { Header } from "./Components/Header";
import { Nav } from "./Components";
import { Footer } from "./Components";

function App() {
  return (
    <div className="App">
      <Header className="applyPad" />
      <Nav className="applyPad" />
      <Article className="applyPad" />
      <Article className="applyPad" />
      <Footer className="applyPad" />
    </div>
  );
}

export default App;
