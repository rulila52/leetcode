// ✅✅ 1129. Shortest Path with Alternating Colors (🥳) (Accepted - by myself)
// 📅 11.02.23 (Daily Challenge)
// You are given an integer n, the number of nodes in a directed graph.
// Each edge is red or blue in this graph.
// You are given two arrays redEdges and blueEdges where:
// redEdges[i] = [ai, bi] indicates a directed red edge from node ai to node bi in the graph, and
// blueEdges[j] = [uj, vj] indicates a directed blue edge from node uj to node vj in the graph.
// Return an array answer of length n, where each answer[x] is the length of the shortest path
// from node 0 to node x such that the edge colors alternate along the path,
// or -1 if such a path does not exist.
// More: 🔗 https://leetcode.com/problems/shortest-path-with-alternating-colors/
import { shortestAlternatingPaths } from "./1129_shortest_path_alt_colors";

describe("Shortest Path with Alternating Colors", () => {
    it(`should return [0, 1, -1] since we can get to node 1 in 1 step and cannot get to the node 2`, () => {
        expect(
            shortestAlternatingPaths(
                3,
                [
                    [0, 1],
                    [1, 2],
                ],
                [],
            ),
        ).toEqual([0, 1, -1]);
    });

    it(`should return [0, 1, 1] since we can get to nodes 1,2 in 1 step`, () => {
        expect(
            shortestAlternatingPaths(
                3,
                [
                    [0, 1],
                    [0, 2],
                ],
                [[1, 0]],
            ),
        ).toEqual([0, 1, 1]);
    });

    it(`should return [0, 1, 2, 3, 7] since we can get to nodes 1,2,3 sequentially, 
    but for node 4 we need 7 steps`, () => {
        expect(
            shortestAlternatingPaths(
                5,
                [
                    [0, 1],
                    [1, 2],
                    [2, 3],
                    [3, 4],
                ],
                [
                    [1, 2],
                    [2, 3],
                    [3, 1],
                ],
            ),
        ).toEqual([0, 1, 2, 3, 7]);
    });

    it(`should return [0, -1, -1] since we cannot get to nodes 1,2`, () => {
        expect(shortestAlternatingPaths(3, [[1, 0]], [[2, 1]])).toEqual([0, -1, -1]);
    });
});
