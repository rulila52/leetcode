// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/
function minimumOperations(nums: number[]): number {
    let res = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const mod = nums[i] % 3;
        res += (mod === 0 ? 0 : 1);
    }

    return res;
}