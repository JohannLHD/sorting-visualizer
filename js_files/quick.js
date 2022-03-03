

async function pivot(barsArray, left,right) {

    // change color of current array selected for to red
    for (let ind = left; ind <= right; ind++) {
      barsArray[ind].style.background = "#E8AABE";
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    // change back color of current array selected for to orange
    for (let ind = left; ind <= right; ind++) {
        barsArray[ind].style.background = "#ffd000";
    }
    await new Promise(resolve => setTimeout(resolve, delay));

    // We are assuming the pivot is always the first element
    let index = Math.floor((right + left) / 2)
    let pivot = parseInt(barsArray[index].style.height);

    // change color of current pivot to purple
    barsArray[index].style.background = "#8C4897";
    await new Promise(resolve => setTimeout(resolve, delay));

    let i = left;
    let j = right;

    while (i <= j) {
      
      while (parseInt(barsArray[i].style.height) < pivot) {
        // change color of current i to blue
        barsArray[i].style.background = "#0072ff";
        await new Promise(resolve => setTimeout(resolve, delay));
        // change color back to pink
        barsArray[i].style.background = "#ffd000";
        i++;
      }

      // change color of current i to be swapped to purple
      barsArray[i].style.background = "#0072ff";
      await new Promise(resolve => setTimeout(resolve, delay));

      while (parseInt(barsArray[j].style.height)> pivot) {
        // change color of current j to blue
        barsArray[j].style.background = "#0072ff";
        await new Promise(resolve => setTimeout(resolve, delay));
        // change color back to pink
        barsArray[j].style.background = "#ffd000";
        j--;
      }

      // change color of current j to be swapped to purple
      barsArray[j].style.background = "#0072ff";
      await new Promise(resolve => setTimeout(resolve, delay));

      await new Promise(resolve => setTimeout(resolve, delay));
      if (i <= j) {
          await swap(barsArray[i], barsArray[j]); //sawpping two elements
          barsArray[i].style.background = "#ffd000";
          barsArray[j].style.background = "#ffd000";
          barsArray[index].style.background = "#8C4897";
          await new Promise(resolve => setTimeout(resolve, delay));
          i++;
          j--;
      }
  }

   //change color of current array selected for pivot back to original color
  for (let ind = left; ind <= right; ind++) {
    barsArray[ind].style.background = "#ffd000";
  }
  await new Promise(resolve => setTimeout(resolve, delay));


  return i;
  }


async function quickSort(barsArray, left, right){
  let pivotIndex;
    if (barsArray.length > 1) {
      pivotIndex = await pivot(barsArray, left, right); //index returned from partition
      if (left < pivotIndex - 1) { //more elements on the left side of the pivot
          await quickSort(barsArray, left, pivotIndex - 1); 
      }
      if(pivotIndex < right) { //more elements on the right side of the pivot
          await quickSort(barsArray, pivotIndex, right);
      }
    }
    for(let i = 0 ; i<= left+1; i++){
        barsArray[i].style.background = "#15fa00";
        await new Promise(resolve => setTimeout(resolve, delay));

    }
} 
