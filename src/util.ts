const getRandomNumber = (min: number, max: number): number => {
  const from = Math.ceil(Math.min(min, max));
  const till = Math.floor(Math.max(min, max));
  const result = Math.random() * (till - from + 1) + from;
  return Math.floor(result);
};

const getRandomId = (min: number, max: number) => {
  const idList: number[] = [];
  return function () {
    let currentValue: number = getRandomNumber(min, max);
    while (idList.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    idList.push(currentValue);
    return currentValue;
  };
};

export {getRandomId};
