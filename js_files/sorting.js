import {bubbleSort} from "../js_files/bubble.js";
import {selectionSort} from "../js_files/selection.js";

/////DOM Selectors////
let bars = document.getElementById('sorting-bars');
let btnNewArray = document.getElementById('new-array');
let btnBubble = document.getElementById('bubble-sort');
let btnInsertion = document.getElementById('insertion-sort');
let btnMerge = document.getElementById('merge-sort');
let btnQuick = document.getElementById('quick-sort');
let btnSelection = document.getElementById('selection-sort');
let btnSize = document.getElementById('arr_sz');
let btnSpeed = document.getElementById('arr_sp');

let arr = [];


/////Generate Array with corresponding bars////

function createArr(arr,num){
    function generateRandom100(){
        return Math.floor(Math.random()*100)+1;
    } 
    for(let i = 0 ; i < num ; i++){
        arr.push(generateRandom100())
    }
    return arr
}

function addBarsHTML(arr){

    for(let i = 0 ; i<arr.length ; i++){
        let height = arr[i]*0.7;
        let para = document.createElement("div");  
        para.classList.add("bars-generated");
        para.id = i;
        para.style.height = `${height}vh`
        bars.appendChild(para);
    }
}

//Generate 100 bars randomly
function generateSortingBars(){
    //Reinitialize the bars
    bars.innerHTML = "";
    arr = [];
    createArr(arr,btnSize.value);
    addBarsHTML(arr);
}

btnSize.addEventListener('input',generateSortingBars);
btnNewArray.addEventListener('click',generateSortingBars);

//Adding event listeners to sorting algorithms

let speedParam = 2000-btnSpeed.value; 

function getSpeed(){
    speedParam = 2000-btnSpeed.value; 
}

btnSpeed.addEventListener('input',getSpeed);

function startBubbleSort(){
    console.log(speedParam)
    bubbleSort(arr,speedParam);
}

function startSelection(){
    selectionSort(arr,speedParam);
}
  
btnBubble.addEventListener('click',startBubbleSort)
btnSelection.addEventListener('click',startSelection)
