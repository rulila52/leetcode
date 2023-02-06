export function shuffle(nums: number[], n: number): number[] {
    for (let i = 0; i < n - 1; i++) {
        nums.splice(i * 2 + 1, 0, nums[n + i]);
        nums.splice(n + i + 1, 1);
    }
    return nums;
}
