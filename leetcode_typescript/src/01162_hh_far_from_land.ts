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

// Implemented one of the solutions
export function maxDistanceSolution(grid: number[][]): number {
    let gridVisited: boolean[][] = [];
    for (let i = 0; i < grid.length; i++) {
        gridVisited[i] = [];
        for (let j = 0; j < grid[i].length; j++) {
            gridVisited[i].push(false);
        }
    }

    interface Cell {
        i: number;
        j: number;
        curDist: number;
    }

    let queue: Cell[] = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                gridVisited[i][j] = true;
                queue.push({ i: i, j: j, curDist: 0 });
            }
        }
    }

    let maxDist = -1;

    while (queue.length) {
        const cell: Cell = queue.shift()!;
        if (cell.curDist > 0) {
            maxDist = cell.curDist;
        }
        if (cell.i + 1 < gridVisited.length && !gridVisited[cell.i + 1][cell.j]) {
            queue.push({ i: cell.i + 1, j: cell.j, curDist: cell.curDist + 1 });
            gridVisited[cell.i + 1][cell.j] = true;
        }
        if (cell.i - 1 >= 0 && !gridVisited[cell.i - 1][cell.j]) {
            queue.push({ i: cell.i - 1, j: cell.j, curDist: cell.curDist + 1 });
            gridVisited[cell.i - 1][cell.j] = true;
        }
        if (cell.j + 1 < gridVisited[cell.i].length && !gridVisited[cell.i][cell.j + 1]) {
            queue.push({ i: cell.i, j: cell.j + 1, curDist: cell.curDist + 1 });
            gridVisited[cell.i][cell.j + 1] = true;
        }
        if (cell.j - 1 >= 0 && !gridVisited[cell.i][cell.j - 1]) {
            queue.push({ i: cell.i, j: cell.j - 1, curDist: cell.curDist + 1 });
            gridVisited[cell.i][cell.j - 1] = true;
        }
    }

    return maxDist;
}
