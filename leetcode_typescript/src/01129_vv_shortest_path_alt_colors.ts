export function shortestAlternatingPaths(
    n: number,
    redEdges: number[][],
    blueEdges: number[][],
): number[] {
    interface Node {
        color: Record<number, number[]>;
    }

    let nodes: Record<number, Node> = {};

    for (let i = 0; i < redEdges.length; i++) {
        if (!nodes[redEdges[i][0]]) {
            nodes[redEdges[i][0]] = { color: { 0: [], 1: [] } };
        }
        nodes[redEdges[i][0]].color[0].push(redEdges[i][1]);
    }

    for (let i = 0; i < blueEdges.length; i++) {
        if (!nodes[blueEdges[i][0]]) {
            nodes[blueEdges[i][0]] = { color: { 0: [], 1: [] } };
        }
        nodes[blueEdges[i][0]].color[1].push(blueEdges[i][1]);
    }

    interface VisitedFrom {
        color: Record<number, boolean>;
    }

    let visitedFrom: VisitedFrom[] = [];
    let distances: number[] = [];

    distances.push(0);
    visitedFrom.push({ color: { 0: true, 1: true } });

    for (let i = 1; i < n; i++) {
        visitedFrom.push({ color: { 0: false, 1: false } });
        distances.push(-1);
    }

    let queue: {
        node: number;
        color: number;
        distance: number;
    }[] = [];

    const start = (color: number) => {
        nodes[0]?.color[color].forEach((node) => {
            queue.push({ node: node, color: color, distance: 1 });
        });
    };
    let color = 0;
    start(0);
    color = 1;
    start(1);

    while (queue.length) {
        const current = queue.shift()!;

        if (current.distance < distances[current.node] || distances[current.node] == -1) {
            distances[current.node] = current.distance;
        }

        if (nodes[current.node]) {
            let newColor = 1 - current.color;
            nodes[current.node]?.color[newColor].forEach((node) => {
                if (!visitedFrom[node].color[newColor]) {
                    queue.push({
                        node: node,
                        color: newColor,
                        distance: current.distance + 1,
                    });
                    visitedFrom[node].color[newColor] = true;
                }
            });
        }
    }
    return distances;
}
