import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store= createStore(reducers,compose(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
       <App />
    </Provider>
);

 

