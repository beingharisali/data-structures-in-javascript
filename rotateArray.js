function rotateArray(arr, d) {
  let n = arr.length;
  for (let i = 0; i < d; i++) {
    let lastElement = arr[n - 1];
    for (let j = n - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = lastElement;
  }
}

let arr = [1, 2, 3, 4, 5, 6];
let d = 3;
rotateArray(arr, d);
console.log(arr.join(" "));
