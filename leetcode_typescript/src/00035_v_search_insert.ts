export function searchInsert(nums: number[], target: number): number {
    let range = Math.floor(nums.length / 2),
        index = range;

    for (;;) {
        if (nums[index] === undefined || nums[index] === target) {
            return index;
        }

        if (range === 0) {
            if (nums[index] > target) {
                if (nums[index - 1] == undefined || nums[index - 1] < target) {
                    return index;
                } else {
                    return index - 1;
                }
            } else {
                if (nums[index + 1] == undefined || nums[index + 1] >= target) {
                    return index + 1;
                } else {
                    return index + 2;
                }
            }
        }

        range = Math.floor(range / 2);

        if (nums[index] > target) {
            index -= range === 0 ? 1 : range;
        } else {
            index += range === 0 ? 1 : range;
        }
    }
}
