import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import './index.scss'
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
console.log('app')
let a=123;
let test=(value)=>{
    return value*2;
}

console.log(test(a))