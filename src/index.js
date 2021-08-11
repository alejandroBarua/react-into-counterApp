import React from 'react';
import ReactDOM from "react-dom";
//import Component from "./Component";
import CounterApp from "./CounterApp";
import './index.css';


const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp value={12} />, divRoot);