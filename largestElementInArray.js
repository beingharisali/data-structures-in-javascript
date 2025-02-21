function largestElement(arr) {
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  return max;
}
let arr = [10, 30, 2, 1, 100, 110, 290];

console.log(largestElement(arr));
