/**
 * https://leetcode.com/problems/increment-submatrices-by-one/description/?envType=daily-question&envId=2025-11-14
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
export var rangeAddQueries = function(n, queries) {
    const diff = Array(n).fill().map(
        () => Array(n).fill(0)
    );

    for (const q of queries) {
        for (let i = q[0]; i <= q[2]; i++) {
            diff[i][q[1]]++;
            if (q[3] + 1 < n) {
                diff[i][q[3] + 1]--;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            diff[i][j] += (diff[i][j - 1] ?? 0);
        }
    }

    return diff;
};