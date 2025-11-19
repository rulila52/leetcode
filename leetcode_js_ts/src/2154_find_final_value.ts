// https://leetcode.com/problems/keep-multiplying-found-values-by-two/description/
function findFinalValue(numsParam: number[], original: number): number {
    const nums = numsParam.sort((a, b) => a - b);
    let res = original;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === res) {
            res *= 2;
        }
    }
    return res;
}

function findFinalValue2(nums: number[], original: number): number {
    let res = original;
    const set = new Set(nums);
    while (set.has(res)) {
        res *= 2;
    }
    return res;
}