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
                    <button onClick={() => this.decrement()}>-</button>
                    {this.state.counter}
                    <button onClick={() => this.increment()}>+</button></div>
                );
    }

    private increment(){
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