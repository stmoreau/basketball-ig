import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./less/index.less";

const isProduction = process.env.NODE_ENV === 'production';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();

ReactGA.initialize('UA-129691022-01');
ReactGA.pageview(window.location.pathname + window.location.search);
