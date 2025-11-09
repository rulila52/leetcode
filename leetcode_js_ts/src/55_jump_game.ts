export function canJump(nums: number[]): boolean {
    if (nums.length === 1) {
        return true;
    }

    let maxReach = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (i > maxReach) {
            return false;
        }
        if (maxReach >= nums.length - 1) {
            return true;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
    }
    return false;
}
