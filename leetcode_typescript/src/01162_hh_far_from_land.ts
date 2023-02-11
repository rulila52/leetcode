// Implemented with partial help of the solution
export function maxDistance(grid: number[][]): number {
    let distanceToLand: number[][] = Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
        distanceToLand[i] = [];
        for (let j = 0; j < grid[i].length; j++) {
            distanceToLand[i].push(-1);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                for (let k = 0; k < distanceToLand.length; k++) {
                    for (let l = 0; l < distanceToLand[k].length; l++) {
                        if (grid[k][l] != 1) {
                            const distance = Math.abs(i - k) + Math.abs(j - l);
                            if (distanceToLand[k][l] == -1 || distance < distanceToLand[k][l]) {
                                distanceToLand[k][l] = distance;
                            }
                        }
                    }
                }
            }
        }
    }

    let maxDist = -1;
    for (let i = 0; i < distanceToLand.length; i++) {
        for (let j = 0; j < distanceToLand[i].length; j++) {
            if (distanceToLand[i][j] > maxDist) {
                maxDist = distanceToLand[i][j];
            }
        }
    }

    return maxDist;
}