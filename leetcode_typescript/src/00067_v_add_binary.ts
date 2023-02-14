export function addBinary(a: string, b: string): string {
    if (b.length > a.length) {
        [a, b] = [b, a];
    }

    let shift = a.length - b.length,
        rest = 0,
        result = "";

    for (let i = a.length - 1; i >= 0; i--) {
        result += `${+a[i] ^ (+b[i - shift] || 0) ^ rest}`;
        rest = (+a[i] | ((+b[i - shift] || 0) & rest)) & ((+a[i] & (+b[i - shift] || 0)) | rest);
    }

    return (result + (rest || "")).split("").reverse().join("");
}
