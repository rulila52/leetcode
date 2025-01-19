export class Calculator {
    result: number

    /**
     * @param {number} value
     */
    constructor(value: number) {
        this.result = value;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value: number){
        return new Calculator(this.result + value);
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value: number){
        return new Calculator(this.result - value);
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value: number) {
        return new Calculator(this.result * value);
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value: number) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return new Calculator(this.result / value);
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value: number) {
        return new Calculator(Math.pow(this.result, value));
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}