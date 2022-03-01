import {bubbleSort} from "../js_files/bubble.js";

/////DOM Selectors////
let bars = document.getElementById('sorting-bars');
let btnNewArray = document.getElementById('new-array');
let btnBubble = document.getElementById('bubble-sort');
let btnInsertion = document.getElementById('insertion-sort');
let btnMerge = document.getElementById('merge-sort');
let btnQuick = document.getElementById('quick-sort');
let btnSelection = document.getElementById('selection-sort');

let arr = [];

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
        let height = arr[i]*7;
        let para = document.createElement("div");  
        para.classList.add("bars-generated");
        para.id = i;
        para.style.height = `${height}px`
        bars.appendChild(para);
    }
}

//Generate 100 bars randomly
function generateSortingBars(){
    //Reinitialize the bars
    bars.innerHTML = "";
    arr = [];
    createArr(arr,100);
    console.log(arr)
    addBarsHTML(arr);
}

btnNewArray.addEventListener('click',generateSortingBars);


function startBubbleSort(){
    bubbleSort(arr);
}
  
btnBubble.addEventListener('click',startBubbleSort)