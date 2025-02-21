function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
const arr = [1, 4, 3, 2, 6, 5];
reverseArray(arr);
console.log(arr.join(" "));
