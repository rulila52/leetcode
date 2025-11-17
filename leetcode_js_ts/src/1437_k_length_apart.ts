// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/
function kLengthApart(nums: number[], k: number): boolean {
    const n = nums.length;
    let count = -1;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            if (count !== -1) {
                count++;
            }
        } else {
            if (count !== -1 && count < k) {
                return false;
            }
            count = 0;
        }
    }
    return true;
}