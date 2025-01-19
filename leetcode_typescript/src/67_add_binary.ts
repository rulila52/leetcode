export function addBinary(a: string, b: string): string {
    if (b.length > a.length) {
        [a, b] = [b, a];
    }

    let shift = a.length - b.length,
        carry = 0,
        result = [];

    for (let i = a.length - 1; i >= shift; i--) {
        result.unshift(+a[i] ^ (+b[i - shift] || 0) ^ carry);
        carry = (+a[i] | ((+b[i - shift] || 0) & carry)) & ((+a[i] & (+b[i - shift] || 0)) | carry);
    }

    for (let i = shift - 1; i >= 0; i--) {
        result.unshift(+a[i] ^ carry);
        carry = +a[i] & carry;
    }

    return (result.unshift(carry || ""), result).join("");
}
