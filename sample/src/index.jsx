import { StrictMode } from "react";
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
if(rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('There is no root.')
}
