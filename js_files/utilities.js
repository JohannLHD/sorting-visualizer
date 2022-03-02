export function swap(el1, el2, speed) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    el1.style.height = transform2;
    el2.style.height = transform1;
    return new Promise((resolve) => setTimeout(resolve, speed));
  }
  
export function pause(speed){
      return new Promise((resolve) => setTimeout(resolve, speed));
}