import React from 'react';
import ReactDOM from "react-dom";
import Component from "./Component";
import './index.css';


const divRoot = document.querySelector('#root');

ReactDOM.render( <Component title="Hello World" number = {12}/>, divRoot);