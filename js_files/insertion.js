async function insertionSort(barsArray) {
  // n is the total number of bars
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
  
  for (let i = 1; i < n; i++) {

     let j = i-1;
     let key = parseInt(barsArray[i].style.height);

     // change the color of the bar to be compared to blue
     barsArray[j+1].style.background = "#0072ff";
     barsArray[j].style.background = "#0072ff";
     await new Promise(resolve => setTimeout(resolve, delay));

      while (j >= 0 && parseInt(barsArray[j].style.height) > key) {
          console.log(barsArray[j].style.height)

          await swap(barsArray[j+1], barsArray[j]);

          // change color back to normal
          barsArray[j+1].style.background = "#15fa00";
          barsArray[j].style.background = "#15fa00";
          await new Promise(resolve => setTimeout(resolve, delay));

          j--;
      
          // change the color of the first bar smaller or equal to the key's bar
          if (j >= 0) {
              barsArray[j].style.background = "#0072ff";
              await new Promise(resolve => setTimeout(resolve, delay));
          }
      }
      // change color back to normal 
      if (j >= 0)
      barsArray[j].style.background = "#15fa00";
      barsArray[j+1].style.background = "#15fa00";
      await new Promise(resolve => setTimeout(resolve, delay));
      //barsArray[i].style.background = "#15fa00";
  }

  // barsArray is sorted, change bar's color to green
  for (let i = 0; i < n; i++) {
      barsArray[i].style.background = "#15fa00";
  }
  await new Promise(resolve => setTimeout(resolve, delay));
}
