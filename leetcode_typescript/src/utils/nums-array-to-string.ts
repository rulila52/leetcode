export function numsArrayToString(arr: number[][]) {
    return arr
        .map((innerArr) => innerArr.sort((a, b) => a - b).join(","))
        .sort()
        .join(":");
}
