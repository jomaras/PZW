/// <reference types="react" />
import * as React from 'react';
export interface IState {
    counter: number;
}
export declare class Counter extends React.Component<{}, IState> {
    constructor();
    render(): JSX.Element;
    private increment();
    private decrement();
}
