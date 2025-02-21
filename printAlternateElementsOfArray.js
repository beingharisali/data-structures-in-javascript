function getAlternates(arr) {
  let result = [];
  for (let index = 0; index < arr.length; index += 2) {
    result.push(arr[index]);
  }
  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = getAlternates(arr);
console.log(res);
