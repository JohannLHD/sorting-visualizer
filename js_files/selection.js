import {swap,pause} from "../js_files/utilities.js";

function swapArr(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

export async function selectionSort(arr,speed) {
  
  let i, j, min_idx;
  let n = arr.length;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    let el2 = document.getElementById(i);
    el2.style.backgroundColor = "rgb(237, 57, 105)";
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++) {
        let el3 = document.getElementById(j);
        el3.style.backgroundColor = "rgb(237, 57, 105)";
        await pause(speed);
        el3.style.backgroundColor = "rgb(210, 235, 89)";
        if (arr[j] < arr[min_idx]) min_idx = j;
    }
    // Swap the found minimum element with the first element
    swapArr(arr, min_idx, i);
    let el1 = document.getElementById(min_idx);
    el2 = document.getElementById(i);
    
    await swap(el1, el2,speed);
    el2.style.backgroundColor = "rgb(237, 57, 105)";
    document.getElementById(i).style.backgroundColor = "rgb(78, 237, 140)"
  }
  document.getElementById(n-1).style.backgroundColor = "rgb(78, 237, 140)"
}


