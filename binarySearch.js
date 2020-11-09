const arr = Array.from(Array(100).keys());

const binary = (arr, target) => {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2);
  let steps = 0;

  for (let i = 0; i < arr.length; i++) {
    // while start < end
    if (arr[mid] != target) {
      if (target < arr[mid]) {
        end = mid;
      } else {
        start = mid;
      }
      mid = Math.floor((start + end) / 2);
      steps++;
    }
    if (arr[mid] === target) {
      if (steps === 0) steps++;
      return `mid is ${mid}, target ${target} found in ${steps} steps, index`;
    }
  }
  return "Nothing found";
};

console.log(binary(arr, 87));
