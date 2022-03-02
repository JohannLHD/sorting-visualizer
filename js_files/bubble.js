
function swap(el1, el2, speed) {
  console.log(speed)
      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);
      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");
      el1.style.height = transform2;
      el2.style.height = transform1;
      return new Promise(resolve => setTimeout(resolve,speed)) 
}


export async function bubbleSort(arr,speed) {
  //console.log(speed)
  let i, j, temp;
  let n = arr.length;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const el1 = document.getElementById(j);
        const el2 = document.getElementById(j+1);
        el1.style.backgroundColor = "rgb(237, 57, 105)";
        el2.style.backgroundColor = "rgb(237, 57, 105)";
        await swap(el1, el2, speed);
        el1.style.backgroundColor = "rgb(210, 235, 89)";
        el2.style.backgroundColor = "rgb(210, 235, 89)";
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    document.getElementById(n-i-1).style.backgroundColor = "rgb(78, 237, 140)"
  }
  document.getElementById(0).style.backgroundColor = "rgb(30, 201, 96)"
}



