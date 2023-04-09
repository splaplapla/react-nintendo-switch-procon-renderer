import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { Procon, buttons } from "react-nintendo-switch-procon-renderer";

export default function App() {
  return (
    <div className="App">
      <Procon pressedButtons={[]} />
      <hr />
      <Procon pressedButtons={["zr", "up"]} />
      <hr />
      <Procon pressedButtons={buttons} />
      <hr />
    </div>
  );
}
