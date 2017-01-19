export default class Counter {
    public currentNumber: number;

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