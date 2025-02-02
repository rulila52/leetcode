export function jump(nums: number[]): number {
    let jumps = 0;
    let min = 0,
        max = 0;

    while (max < nums.length - 1) {
        let curMax = 0;
        for (let i = min; i < max + 1; i++) {
            curMax = Math.max(curMax, i + nums[i]);
        }
        min = max;
        max = curMax;
        jumps++;
    }

    return jumps;
}
