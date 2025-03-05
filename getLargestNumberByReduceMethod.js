function getLargestNumber(arr) {
  return arr.reduce((acc, val) => (val > acc ? val : acc), arr[0]);
}

let num1 = [10, 15, 38, 20, 13, 50];
console.log(getLargestNumber(num1));
