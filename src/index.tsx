import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import reportWebVitals from "./reportWebVitals";

import { IndexPage } from "./components/pages/IndexPage";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: #fafafa;
  }

  html {
    font-size: 16px;
    line-height: 2.0;
    color: #424242;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IndexPage />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
