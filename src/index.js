import React from "react";
import ReactDOM from "react-dom";

import "./index.less";

import Authentication from "./Authentication";
import { QueryClient,QueryClientProvider } from 'react-query';


// import  queryClient from './components/clientProvider/clientProvider';
import * as serviceWorker from "./serviceWorker";
// import App from "./App";
const queryClient = new QueryClient()
ReactDOM.render(<QueryClientProvider client={queryClient}>
<Authentication />
</QueryClientProvider>
, document.getElementById("root"));

// ReactDOM.render(
//     <Authentication />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
