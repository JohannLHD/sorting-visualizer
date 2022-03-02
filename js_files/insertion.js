import {swap,pause} from "../js_files/utilities.js";

export async function insertionSort(arr,speed) {
  let i, key, j;
  let n = arr.length
  for (i = 1; i < n; i++) {
    const el1 = document.getElementById(i);
    el1.style.backgroundColor = "rgb(237, 57, 105)";
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      const el2 = document.getElementById(j);
      const el3 = document.getElementById(j+1);
      el2.style.backgroundColor = "rgb(237, 57, 105)";
      el3.style.backgroundColor = "rgb(237, 57, 105)";
      await swap(el2, el3, speed);
      el2.style.backgroundColor = "rgb(30, 201, 96)";
      el3.style.backgroundColor = "rgb(30, 201, 96)";
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    el1.style.backgroundColor = "rgb(30, 201, 96)";
  }
}
