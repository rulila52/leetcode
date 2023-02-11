export function shortestAlternatingPaths(
    n: number,
    redEdges: number[][],
    blueEdges: number[][],
): number[] {
    interface Edge {
        end: number;
        color: "blue" | "red";
    }

    let edges: Record<number, Edge[]> = {};

    for (let i = 0; i < redEdges.length; i++) {
        if (!edges[redEdges[i][0]]) {
            edges[redEdges[i][0]] = [];
        }
        edges[redEdges[i][0]].push({ end: redEdges[i][1], color: "red" });
    }

    for (let i = 0; i < blueEdges.length; i++) {
        if (!edges[blueEdges[i][0]]) {
            edges[blueEdges[i][0]] = [];
        }
        edges[blueEdges[i][0]].push({ end: blueEdges[i][1], color: "blue" });
    }

    let visitedFrom: { red: boolean; blue: boolean }[] = [];
    let distances: number[] = [];

    distances.push(0);
    visitedFrom.push({ red: true, blue: true });

    for (let i = 1; i < n; i++) {
        visitedFrom.push({ red: false, blue: false });
        distances.push(-1);
    }

    let queue: {
        edge: Edge;
        distance: number;
    }[] = [];

    if (edges[0]) {
        for (let i = 0; i < edges[0].length; i++) {
            queue.push({ edge: edges[0][i], distance: 1 });
        }
    }

    while (queue.length) {
        const current = queue.shift()!;
        const nextNode = current.edge.end;

        if (current.distance < distances[nextNode] || distances[nextNode] == -1) {
            distances[nextNode] = current.distance;
        }

        if (edges[nextNode]) {
            for (let i = 0; i < edges[nextNode].length; i++) {
                if (
                    edges[nextNode][i].color != current.edge.color &&
                    !visitedFrom[edges[nextNode][i].end][edges[nextNode][i].color]
                ) {
                    queue.push({ edge: edges[nextNode][i], distance: current.distance + 1 });
                    visitedFrom[edges[nextNode][i].end][edges[nextNode][i].color] = true;
                }
            }
        }
    }

    return distances;
}
