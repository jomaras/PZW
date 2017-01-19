import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Counter } from './Counter';

export * from './Counter';

export class DummyClass {
    public sayHello(){
        alert("Hello");
    }
}

const mainContainer = document.getElementById("main-container");

if(mainContainer){
    ReactDOM.render(
        React.createElement(Counter, {}),
        mainContainer
    )
}