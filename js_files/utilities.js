// export function swap(el1, el2, speed) {
//     const style1 = window.getComputedStyle(el1);
//     const style2 = window.getComputedStyle(el2);
//     const transform1 = style1.getPropertyValue("height");
//     const transform2 = style2.getPropertyValue("height");
//     el1.style.height = transform2;
//     el2.style.height = transform1;
//     return new Promise((resolve) => setTimeout(resolve, speed));
//   }
  
// export function pause(speed){
//       return new Promise((resolve) => setTimeout(resolve, speed));
// }

let delay = 1000;        // In milliseconds
let maxBarHeight = 60;   // In vh

async function swap(bar1, bar2) {
    // change the color of the bar to be swapped to red
    bar1.style.background = "#f00000";
    bar2.style.background = "#f00000";
    await new Promise(resolve => setTimeout(resolve, delay));

    // get the height of the bars
    let heightBar1 = bar1.style.height;
    let heightBar2 = bar2.style.height;

    // swapping the height
    bar1.style.height = heightBar2;
    bar2.style.height = heightBar1;
    await new Promise(resolve => setTimeout(resolve, delay));
}