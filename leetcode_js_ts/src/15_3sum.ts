export function threeSum(nums: number[]): number[][] {
    const res: number[][] = [];
    const sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length - 2; i++) {
        if (sorted[i] > 0) {
            break;
        }

        if (sorted[i] === sorted[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = sorted.length - 1;

        while (j < k) {
            const sum = sorted[i] + sorted[j] + sorted[k];
            if (sum === 0) {
                res.push([sorted[i], sorted[j], sorted[k]]);
            }

            if (sum <= 0) {
                do {
                    j++;
                } while (sorted[j] === sorted[j - 1]);
            } else {
                do {
                    k--;
                } while (sorted[k] === sorted[k + 1]);
            }
        }
    }

    return res;
}
