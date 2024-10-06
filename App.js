import React from "react";
import ReactDom from "react-dom";

const parent =React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"i am an h1 tag"),
        React.createElement("h2",{},"i am h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"i ma h1 tag"),
        React.createElement("h2",{},"i ma h2 tag")
    ])
]);
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(parent);