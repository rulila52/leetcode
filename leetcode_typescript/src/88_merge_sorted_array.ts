/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const nums1Old = [...nums1];

    let i = 0, j = 0;

    for (let k = 0; k < m + n; k++) {
        if (i === n) {
            nums1[k] = nums1Old[j];
            j++;
        } else if (j === m) {
            nums1[k] = nums2[i];
            i++;
        } else if (nums1Old[j] < nums2[i]) {
            nums1[k] = nums1Old[j];
            j++;
        } else {
            nums1[k] = nums2[i];
            i++;
        }
    }
}