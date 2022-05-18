const getRandomNumber = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  const randomNumber = minNumber + (Math.random() * (maxNumber + 1 - minNumber));
  return Math.floor(randomNumber);
};

export default getRandomNumber;
