// ❌❌ 2477. Minimum Fuel Cost to Report to the Capital
// 📅 12.02.23 (Daily Challenge)
// There is a tree (i.e., a connected, undirected graph with no cycles) structure.
// The capital city is city 0. You are given a 2D integer array roads where roads[i] = [ai, bi]
// denotes that there exists a bidirectional road connecting cities ai and bi.
// There is a meeting for the representatives of each city. The meeting is in the capital city.
// There is a car in each city. You are given an integer number of seats in each car.
// A representative can use the car in their city to travel or ride with another representative.
// The cost of traveling between two cities is one liter of fuel.
// Return the minimum number of liters of fuel to reach the capital city.
// More: 🔗 https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/
import { minimumFuelCost } from "./02477_xx_minimum_fuel_cost";

describe("Minimum Fuel Cost to Report to the Capital", () => {
    it(`should return 0 since we haven't roads from 0 capital`, () => {
        expect(
            minimumFuelCost(
                [
                    [2, 1],
                    [3, 2],
                ],
                2,
            ),
        ).toEqual(0);
    });

    it(`should return 3 since it is the minimum number of liters of fuel needed`, () => {
        expect(
            minimumFuelCost(
                [
                    [0, 1],
                    [0, 2],
                    [0, 3],
                ],
                5,
            ),
        ).toEqual(3);
    });

    it(`should return 7 since it is the minimum number of liters of fuel needed`, () => {
        expect(
            minimumFuelCost(
                [
                    [3, 1],
                    [3, 2],
                    [1, 0],
                    [0, 4],
                    [0, 5],
                    [4, 6],
                ],
                2,
            ),
        ).toEqual(7);
    });

    it(`should return 19 since it is the minimum number of liters of fuel needed`, () => {
        expect(
            minimumFuelCost(
                [
                    [0, 1],
                    [1, 2],
                    [1, 3],
                    [4, 2],
                    [5, 3],
                    [6, 3],
                    [6, 7],
                    [8, 6],
                    [9, 0],
                    [5, 10],
                    [11, 9],
                    [12, 5],
                    [5, 13],
                    [8, 14],
                    [11, 15],
                    [8, 16],
                    [17, 0],
                    [18, 7],
                ],
                13,
            ),
        ).toEqual(19);
    });
});
