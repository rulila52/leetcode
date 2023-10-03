export const numIdenticalPairs = (nums: number[]) =>
    nums.reduce(
        (accI, numI, i, arr) =>
            accI +
            arr.slice(i + 1, arr.length).reduce((accJ, numJ) => (numI === numJ ? ++accJ : accJ), 0),
        0,
    );
