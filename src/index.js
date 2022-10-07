import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store";
import App from "./App";
import ReactDOM from "react-dom/client";

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(rootReducer, reduxDevTool);

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
