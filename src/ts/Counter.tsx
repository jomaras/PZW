import * as React from 'react';

export interface IState {
    counter: number;
}

export class Counter extends React.Component <{}, IState> {
    constructor(){
        super();
        
        this.state = {
            counter: 0
        };
    }

    render(){
        return (<div>
                    <button className="decrement-button" onClick={() => this.decrement()}>-</button>
                    <span className="counter-text-container">{this.state.counter}</span>
                    <button className="increment-button" onClick={() => this.increment()}>+</button></div>
                );
    }

    private increment(){
        if(this.state.counter === 2){
            this.state.counter = this.state.counter * 2;
        }

        this.setState({
            counter: this.state.counter + 1
        })
    }

    private decrement(){
        this.setState({
            counter: this.state.counter - 1
        })
    }
}