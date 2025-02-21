function removeDuplicates(arr) {
  let arrLength = arr.length;
  if (arrLength <= 1) {
    return arrLength;
  }
  let idx = 1;
  for (let index = 1; index < arrLength; index++) {
    if (arr[index] !== arr[index - 1]) {
      arr[idx++] = arr[index];
    }
  }
  return idx;
}
const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDuplicates(arr);
console.log(arr.slice(0, newSize).join(" "));
