export default function tribonacci(n: number): number | undefined {
    if (n<0 || n>37) return undefined;

    let first = 0, second = 0, third = 1, sum = 1;

    if (n==0) return second;
    if (n==1) return third;
    if (n==2) return sum;

    for (let i=3; i<=n; i++){
        first = second;
        second = third;
        third = sum;
        sum = sum + first + second;
    }

    return sum;
};

for (let i=0; i<=37; i++) {
    console.log(tribonacci(i))
}