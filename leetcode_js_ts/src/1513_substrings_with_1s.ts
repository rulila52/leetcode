// https://leetcode.com/problems/number-of-substrings-with-only-1s/description/
function numSub(s: string): number {
    let res = 0;
    let len = 0;
    const mod = 1000000007;

    const n = s.length;

    for (let i = 0; i <= n; i++) {
        if (s[i] === "1") {
            len++;
        } else {
            len = 0;
        }
        res = (res + len) % mod;
    }
    return res;
}