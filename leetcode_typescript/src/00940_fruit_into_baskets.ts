export function totalFruit(fruits: number[]): number {
    let first = null,
        second = null,
        maxCount = 0,
        firstCount = 0,
        secondCount = 0,
        countAfterBreak = 0;
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === first) {
            firstCount++;
            countAfterBreak = 1;
            [firstCount, secondCount] = [secondCount, firstCount];
            [first, second] = [second, first];
        } else if (fruits[i] === second) {
            secondCount++;
            countAfterBreak++;
        } else {
            if (second == null) {
                firstCount = 0;
            } else {
                firstCount = countAfterBreak;
            }
            secondCount = 1;
            countAfterBreak = 1;
            first = second;
            second = fruits[i];
        }
        if (firstCount + secondCount > maxCount) {
            maxCount = firstCount + secondCount;
        }
    }
    return maxCount;
}
