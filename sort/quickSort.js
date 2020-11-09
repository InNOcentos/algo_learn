// Массив из 100 случайных чисел

const { shuffle } = require("../utils");
const randoms = shuffle(Array.from(Array(10).keys()));

console.log(randoms);

// Быстрая сортировка

function qsort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter((e) => e < pivot);
    const more = arr.filter((e) => e > pivot);
    return [...qsort(less), pivot, ...qsort(more)];
  }
}

console.log(qsort(randoms));
