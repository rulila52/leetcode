/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let a = num1, b = num2;
    let count = 0;
    while (a > 0 && b > 0) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
        count++;
    }
    return count;
};