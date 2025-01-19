export function addToArrayForm(num: number[], k: number): number[] {
    let num2 = `${k}`.split("").map((o) => +o);

    if (num2.length > num.length) {
        [num, num2] = [num2, num];
    }

    let shift = num.length - num2.length,
        carry = 0,
        result = [];

    for (let i = num.length - 1; i >= shift; i--) {
        result.unshift((num[i] + num2[i - shift] + carry) % 10);
        carry = Math.floor((num[i] + num2[i - shift] + carry) / 10);
    }

    for (let i = shift - 1; i >= 0; i--) {
        result.unshift((num[i] + carry) % 10);
        carry = Math.floor((num[i] + carry) / 10);
    }

    if (carry) {
        result.unshift(carry);
    }

    return result;
}
