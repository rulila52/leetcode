export function tribonacci(n: number): number {
    if (n == 0) return 0;

    let first = 0,
        second = 0,
        third = 1,
        sum = 1;

    for (let i = 2; i < n; i++) {
        first = second;
        second = third;
        third = sum;
        sum = sum + first + second;
    }

    return sum;
}
