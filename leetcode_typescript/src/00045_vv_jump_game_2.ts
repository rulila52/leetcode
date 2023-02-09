export function jump(nums: number[]): number {
    return jumpWithCache(nums, 0, {}).steps;
}

interface StepsAndCache {
    steps: number;
    cache: Record<number, number>;
}

function jumpWithCache(
    nums: number[],
    startIndex: number,
    cache: Record<number, number>,
): StepsAndCache {
    if (startIndex + 1 == nums.length) {
        cache[startIndex] = 0;
        return {
            steps: 0,
            cache: cache,
        };
    }
    let minSteps = -2;
    for (let i = 1; i <= nums[startIndex]; i++) {
        if (i < nums.length) {
            const newIndex = startIndex + i;
            let stepsAndCache: StepsAndCache;
            if (cache[newIndex] != null) {
                stepsAndCache = { steps: cache[newIndex], cache: cache };
            } else {
                stepsAndCache = jumpWithCache(nums, newIndex, cache);
                cache = stepsAndCache.cache;
            }
            if (stepsAndCache.steps >= 0 && (minSteps < 0 || stepsAndCache.steps < minSteps)) {
                minSteps = stepsAndCache.steps;
            }
        }
    }
    cache[startIndex] = ++minSteps;
    return { steps: minSteps, cache: cache };
}
