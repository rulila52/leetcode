export function shuffle1(nums: number[], n: number): number[] {
    for (let i = 0; i < n - 1; i++) {
        nums.splice(i * 2 + 1, 0, nums[n + i]);
        nums.splice(n + i + 1, 1);
    }
    return nums;
}

export function shuffle2(nums: number[], n: number): number[] {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }
    return result;
}
