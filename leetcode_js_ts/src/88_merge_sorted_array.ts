/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1,
        j = n - 1,
        k = m + n - 1;

    while (k >= 0) {
        if (i < 0 || (j >= 0 && nums2[j] > nums1[i])) {
            nums1[k] = nums2[j];
            j--;
        } else {
            nums1[k] = nums1[i];
            i--;
        }

        k--;
    }
}
