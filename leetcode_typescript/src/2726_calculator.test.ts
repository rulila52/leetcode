// ✅ 2726. Calculator with Method Chaining
// 📅 19.01.25
// Design a Calculator class. The class should provide
// the mathematical operations of addition, subtraction,
// multiplication, division, and exponentiation. It should
// also allow consecutive operations to be performed using
// method chaining. The Calculator class constructor should
// accept a number which serves as the initial value of result.
// More: 🔗 https://leetcode.com/problems/calculator-with-method-chaining/description/

import { Calculator } from "./2726_calculator";

describe("Calculator with Method Chaining", () => {
    it(`should return the right answer`, () => {
        expect(new Calculator(10).add(5).subtract(7).getResult()).toEqual(8);
    });
});
