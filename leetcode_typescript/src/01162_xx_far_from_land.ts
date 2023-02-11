export function maxDistance(grid: number[][]): number {
    let flag = false;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > 0) {
                flag = true;
                break;
            }
        }
        if (flag) break;
    }
    if (!flag) return -1;

    let checkingNow: boolean[][] = Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
        checkingNow[i] = [];
        for (let j = 0; j < grid[i].length; j++) {
            checkingNow[i].push(false);
        }
    }

    let maxDist = -1;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let dist = distanceFromPoint(i, j);
            if (dist > 0 && dist > maxDist) {
                maxDist = dist;
            }
        }
    }

    return maxDist;

    function distanceFromPoint(
        i: number,
        j: number,
        fromComing?: Set<"l" | "t" | "r" | "b">,
    ): number {
        if (i > grid.length - 1 || i < 0 || j > grid[i].length - 1 || j < 0 || checkingNow[i][j]) {
            return -1;
        }

        if (grid[i][j] === 1) {
            return 0;
        }

        if (!fromComing) {
            fromComing = new Set();
        }

        checkingNow[i][j] = true;

        let distances = [];
        if (!fromComing.has("b")) {
            let dist = distanceFromPoint(i + 1, j, new Set(fromComing).add("t"));
            if (dist > -1) {
                distances.push(dist);
            }
        }
        if (!fromComing.has("t")) {
            let dist = distanceFromPoint(i - 1, j, new Set(fromComing).add("b"));
            if (dist > -1) {
                distances.push(dist);
            }
        }
        if (!fromComing.has("r")) {
            let dist = distanceFromPoint(i, j + 1, new Set(fromComing).add("l"));
            if (dist > -1) {
                distances.push(dist);
            }
        }
        if (!fromComing.has("l")) {
            let dist = distanceFromPoint(i, j - 1, new Set(fromComing).add("r"));
            if (dist > -1) {
                distances.push(dist);
            }
        }

        checkingNow[i][j] = false;
        return Math.min(...distances) + 1;
    }
}
