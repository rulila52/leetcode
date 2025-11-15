// https://leetcode.com/problems/maximize-the-minimum-powered-city/description/
function maxPower(stations: number[], r: number, k: number): number {
    const n = stations.length;
    const cnt = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const left = Math.max(0, i - r);
        const right = Math.min(n, i + r + 1);
        cnt[left] += stations[i];
        cnt[right] -= stations[i];
    }

    const check = (val: number): boolean => {
        const diff = [...cnt];
        let sum = 0;
        let remaining = k;

        for (let i = 0; i < n; i++) {
            sum += diff[i];
            if (sum < val) {
                const add = val - sum;

                if (add > remaining) {
                    return false;
                }
                remaining -= add;
                const end = Math.min(n, i + r * 2 + 1);
                diff[end] -= add;
                sum += add;
            }
        }

        return true;
    }

    let lo = Math.min(...stations);
    let hi = stations.reduce((a, b) => a + b) + k;
    let res = 0;

    while (lo <= hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        if (check(mid)) {
            res = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return res;
}