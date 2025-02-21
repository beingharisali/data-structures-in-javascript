function subArray(arr) {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = i; j < arrLength; j++) {
      let subArr = [];
      for (let k = i; k <= j; k++) {
        subArr.push(arr[k]);
      }
      console.log(subArr.join(" "));
    }
  }
}
const arr = [1, 2, 3, 4];
subArray(arr);
