export function minimumFuelCost(roads: number[][], seats: number): number {
    let resultCost = 0;
    let visited: Record<number, boolean> = {};

    fuelCost(0);
    return resultCost;

    function fuelCost(city: number): number {
        visited[city] = true;
        let persons = 1;
        for (let i = 0; i < roads.length; i++) {
            if (roads[i][0] == city && !visited[roads[i][1]]) {
                persons += fuelCost(roads[i][1]);
            } else if (roads[i][1] == city && !visited[roads[i][0]]) {
                persons += fuelCost(roads[i][0]);
            }
        }
        if (city != 0) {
            resultCost += Math.ceil(persons / seats);
        }
        return persons;
    }
}
