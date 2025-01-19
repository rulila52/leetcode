export function removeElement(nums: number[], val: number): number {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

export function removeElement2(nums: number[], val: number): number {
    let deletedCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (deletedCount > 0) {
            nums[i - deletedCount] = nums[i];
        }

        if (nums[i] === val) {
            deletedCount++;
        }
    }

    return nums.length - deletedCount;
}
