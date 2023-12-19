import React from "react";
import "./App.scss";
// import "bootstrap/scss/bootstrap.scss";
import  App  from "./App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Context from "./Context";
import { Provider } from 'react-redux';
import store from './store/store';

const mount = (el) => {
  console.log('process.env',process.env.NODE_ENV)
  if(process.env.NODE_ENV !='development'){
    console.log = function() {}
  }
  console.log('process.env.REACT_APP_API_END_POINT',process.env.NODE_ENV)
  const root = createRoot(el);
  root.render(
  // <React.StrictMode>
  <Provider store={store}> <Context> <App /></Context></Provider>
   
  // </React.StrictMode>
  );
  }

  // if (process.env.NODE_ENV === "production") {
    const rootNode = document.querySelector("#root");
    if (rootNode) {
        mount(rootNode);
    }
  // }
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export {mount}