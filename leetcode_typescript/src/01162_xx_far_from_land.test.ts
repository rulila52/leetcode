// ❌❌ 1162. As Far from Land as Possible
// 📅 10.02.23 (Daily Challenge)
// Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land,
// find a water cell such that its distance to the nearest land cell is maximized, and return the distance.
// If no land or water exists in the grid, return -1.
// The distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.
// More: 🔗 https://leetcode.com/problems/as-far-from-land-as-possible/

import { maxDistance } from "./01162_xx_far_from_land";

describe("As Far from Land as Possible", () => {
    it(`should return 2 since the cell (1, 1) is as far as possible`, () => {
        expect(
            maxDistance([
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1],
            ]),
        ).toEqual(2);
    });

    it(`should return 4 since the cell (2, 2) is as far as possible`, () => {
        expect(
            maxDistance([
                [1, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ]),
        ).toEqual(4);
    });

    it(`should return -1 since there is no the cell with land`, () => {
        expect(
            maxDistance([
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
            ]),
        ).toEqual(-1);
    });

    it(`should return -1 since there is no the cell with water`, () => {
        expect(
            maxDistance([
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1],
            ]),
        ).toEqual(-1);
    });

    it(`test with 100x100 with 1 only on border, should execute`, () => {
        let grid: number[][] = [];
        let length = 100;

        for (let i = 0; i < length; i++) {
            grid[i] = [];
            grid[i][0] = 1;
            grid[i][length - 1] = 1;
            for (let j = 1; j < length - 1; j++) {
                if (i == 0 || i == length - 1) {
                    grid[i][j] = 1;
                } else {
                    grid[i][j] = 0;
                }
            }
        }

        console.time("check");
        maxDistance(grid);
        console.timeEnd("check");
    });
});