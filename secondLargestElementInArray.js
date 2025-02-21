// function getSecondLargestNumber(arr) {
//   let arrLength = arr.length;
//   arr.sort((a, b) => a - b);
//   for (let index = arrLength - 2; index < arrLength; index++) {
//     if (arr[index] !== arr[arrLength - 1]) {
//       return arr[index];
//     }
//   }
//   return -1;
// }

// let arr = [50, 30, 65, 12, 0, 8, 13];
// console.log(getSecondLargestNumber(arr));

// another approach

function getSecondLargestNumber(arr) {
  arr.sort((a, b) => b - a);
  return arr[1];
}
let arr = [50, 30, 65, 12, 0, 8, 13];
console.log(getSecondLargestNumber(arr));
