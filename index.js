export const randomNum = (min, max) => {
    const minNum = Math.ceil(min);
    const maxNum = Math.floor(max);
    const rand = minNum + (Math.random() * (maxNum + 1 - minNum));
    return Math.floor(rand);
};

export const randomIndex = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
};

export const randomIndexTwo = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return rand;
};
