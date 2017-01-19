export class Counter {
    public currentNumber: number;
    public anotherNumber: number;

    constructor(){
        this.currentNumber = 0;
    }

    public increment(){
        this.currentNumber++;
    }

    public decrement(){
        this.currentNumber--;
    }
}