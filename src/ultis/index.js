export const createRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const formatNum = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
