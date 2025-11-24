// https://leetcode.com/problems/binary-prefix-divisible-by-5/description/
const prefixesDivBy5 = (nums: Array<number>): Array<boolean> => {
    const answer = [];
    let prefix = 0;
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        prefix = ((prefix << 1) + nums[i]) % 5;
        answer.push(prefix === 0);
    }
    return answer;
};

const prefixesDivBy5_2 = (nums: Array<number>): Array<boolean> => {
    const answer = [];
    let prefix = 0;
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        prefix = ((prefix << 1) + nums[i]) % 5;
        answer.push(prefix === 0);
    }
    return answer;
};