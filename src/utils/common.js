export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomElements = (oldArr, maxLength) => {
  const newArr = [];

  for (let i = 0; i < maxLength; i++) {
    newArr.push(oldArr[getRandomInteger(0, oldArr.length - 1)]);
  }

  const uniqueElements = new Set(newArr);

  return Array.from(uniqueElements);
};
