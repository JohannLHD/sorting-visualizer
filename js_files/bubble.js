//import {swap} from "../js_files/utilities.js";


// export async function bubbleSort(arr,speed) {
//   //console.log(speed)
//   let i, j, temp;
//   let n = arr.length;
//   for (i = 0; i < n - 1; i++) {
//     for (j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         const el1 = document.getElementById(j);
//         const el2 = document.getElementById(j+1);
//         el1.style.backgroundColor = "rgb(237, 57, 105)";
//         el2.style.backgroundColor = "rgb(237, 57, 105)";
//         await swap(el1, el2, speed);
//         el1.style.backgroundColor = "rgb(210, 235, 89)";
//         el2.style.backgroundColor = "rgb(210, 235, 89)";
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     document.getElementById(n-i-1).style.backgroundColor = "rgb(78, 237, 140)"
//   }
//   document.getElementById(0).style.backgroundColor = "rgb(30, 201, 96)"
// }


async function bubbleSort(barsArray) {
  // n -> total number of bars 
  let n = barsArray.length;
   // change color of current array selected for to red
   for (let ind = 0; ind < n; ind++) {
    barsArray[ind].style.background = "#E8AABE";
   }
   await new Promise(resolve => setTimeout(resolve, delay));

  // change back color of current array selected for to orange
  for (let ind = 0; ind < n; ind++) {
      barsArray[ind].style.background = "#ffd000";
   }
  await new Promise(resolve => setTimeout(resolve, delay));

  for (let i = n-1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {

          // change color of the bar being process to blue  
          barsArray[j].style.background = "#0072ff";
          barsArray[j+1].style.background = "#0072ff";
          await new Promise(resolve => setTimeout(resolve, delay));

          if (parseInt(barsArray[j].style.height) > parseInt(barsArray[j+1].style.height)) {
              await swap(barsArray[j], barsArray[j+1]);
          }

          // change color back to normal
          barsArray[j].style.background = "#ffd000";
          barsArray[j+1].style.background = "#ffd000";
          await new Promise(resolve => setTimeout(resolve, delay));
      }

      // ith bar is sorted, change its color to green
      barsArray[i].style.background = "#15fa00";
      await new Promise(resolve => setTimeout(resolve, delay));
  }
}


