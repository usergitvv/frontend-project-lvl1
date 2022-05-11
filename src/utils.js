const makeRandomNum = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  const rand = minNum + (Math.random() * (maxNum + 1 - minNum));
  return Math.floor(rand);
};

export default makeRandomNum;
