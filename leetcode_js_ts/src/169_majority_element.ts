// Time - O(n), Space - O(n)
export function majorityElement(nums: number[]): number {
    let res = 0,
        majority = 0,
        hash: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        hash[num] = (hash[num] ?? 0) + 1;

        if (hash[num] > majority) {
            majority = hash[num];
            res = num;
        }
    }

    return res;
}

// Time - O(n), Space - O(1)
export function majorityElement2(nums: number[]): number {
    let res = 0,
        majority = 0;

    for (let i = 0; i < nums.length; i++) {
        if (majority === 0) {
            res = nums[i];
        }

        if (nums[i] === res) {
            majority++;
        } else {
            majority--;
        }
    }

    return res;
}
