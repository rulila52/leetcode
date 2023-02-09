export function totalFruit(fruits: number[]): number {
    let first = null,
        second = null,
        maxCount = 0,
        firstCount = 0,
        secondCount = 0,
        afterBreakCount = 0;
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === first) {
            firstCount++;
            afterBreakCount = 1;
            [firstCount, secondCount] = [secondCount, firstCount];
            [first, second] = [second, first];
        } else if (fruits[i] === second) {
            secondCount++;
            afterBreakCount++;
        } else {
            firstCount = afterBreakCount;
            secondCount = 1;
            afterBreakCount = 1;
            first = second;
            second = fruits[i];
        }

        if (firstCount + secondCount > maxCount) {
            maxCount = firstCount + secondCount;
        }
    }
    return maxCount;
}
