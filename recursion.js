function test(arr) {
  if (arr.length === 1) {
    return [...arr];
  }
  return arr[0] + +test(arr.splice(1));
}

console.log(test([1, 2, 3, 4, 5, 6, 7]));
