import React from "react";
import {render} from 'react-dom';
import "./index.css";
import App from "./App";


import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import { Provider } from "react-redux";
import store from "./app/store";
// import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
// TimeAgo.addLocale(en);

const root =document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,root
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
