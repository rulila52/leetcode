export function removeDuplicates(nums: number[]): number {
    let k = 1;
    let counter = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] !== nums[i]) {
            counter = 1;
        } else {
            counter++;
        }

        if (counter < 3) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}
