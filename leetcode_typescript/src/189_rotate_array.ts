/**
 Do not return anything, modify nums in-place instead.
 Time - O(n), Space - O(n)
 */
export function rotate(nums: number[], k: number): void {
    const res = new Array(k);

    for (let i = 0; i < nums.length; i++) {
        res[(i + k) % nums.length] = nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = res[i];
    }
}

export function rotate2(nums: number[], k: number): void {
    let kRem = (k %= nums.length);

    function reverse(leftInit: number, rightInit: number) {
        let left = leftInit,
            right = rightInit;

        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left += 1;
            right -= 1;
        }
    }

    reverse(0, nums.length - 1);
    reverse(0, kRem - 1);
    reverse(k, nums.length - 1);
}
