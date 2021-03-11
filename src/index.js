import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./theme/globalStyles";
import Theme from "./theme/theme";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </>,
  root
);
