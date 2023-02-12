export function minimumFuelCost(roads: number[][], seats: number): number {
    let edges: Record<number, number[]> = {};

    for (let i = 0; i < roads.length; i++) {
        if (!edges[roads[i][0]]) {
            edges[roads[i][0]] = [];
        }
        edges[roads[i][0]].push(roads[i][1]);
        if (!edges[roads[i][1]]) {
            edges[roads[i][1]] = [];
        }
        edges[roads[i][1]].push(roads[i][0]);
    }

    let resultCost = 0,
        visited: Record<number, boolean> = {};

    countCost(0);
    return resultCost;

    function countCost(city: number): number {
        visited[city] = true;
        let persons = 1;
        for (let i = 0; i < edges[city]?.length || 0; i++) {
            if (!visited[edges[city][i]]) {
                persons += countCost(edges[city][i]);
            }
        }
        if (city != 0) {
            resultCost += Math.ceil(persons / seats);
        }
        return persons;
    }
}
