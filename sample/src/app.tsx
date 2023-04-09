import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Procon, Button } from "react-nintendo-switch-procon-renderer";

export default function App() {
  const handleButtonClick = (button: Button) => {
    console.log(button);
  }

  return (
    <div className="App">
      <Procon pressedButtons={[]} handleButtonClick={handleButtonClick}/>
      <hr />
      <Procon pressedButtons={["zr", "up"]} />
      <hr />
      <Procon pressedButtons={["a", "b", "x", "y", "up", "right", "down", "left", "r", "l", "zr", "zl", "plus", "minus", "home", "cap"]} />
    </div>
  );
}
