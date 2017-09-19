///////////////////////////////////////////
// jquery and tether for bootstrap to use
// alternative is to link them in index.html
// import jquery from "jquery";
/////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";
import RouterComponent from "./routerComponent";
import registerServiceWorker from "./registerServiceWorker";
// window.$ = window.jQuery = jquery;


ReactDOM.render(
   <RouterComponent/>
    ,
    document.getElementById("root")
);
registerServiceWorker();




