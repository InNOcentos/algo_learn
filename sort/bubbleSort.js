// Массив из 100 случайных чисел
const { shuffle } = require("../utils");
const randoms = shuffle(Array.from(Array(100).keys()));

// Сортировка пузырьком

const sorter = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let y = 0; y < array.length - i; y++) {
      if (array[y] < array[y + 1]) {
        let currElem = array[y];
        array[y] = array[y + 1];
        array[y + 1] = currElem;
      }
    }
  }
  return array;
};

console.log(sorter(randoms));
