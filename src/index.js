import React from "react";
import ReactDOM from "react-dom";
import { ReactQueryProvider } from "./lib/react-query";
import "./index.less";
import * as serviceWorker from "./serviceWorker";
import { HCM } from "./HCM";
import Authentication from "./Authentication";
// import App from "./App";


ReactDOM.render( <ReactQueryProvider>
    <Authentication />
</ReactQueryProvider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
