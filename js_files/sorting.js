let array_size = document.querySelector(".arr_sz");
let animationSpeed = document.querySelector(".arr_sp");

//let delay = 1000;        // In milliseconds
//let maxBarHeight = 60;   // In vh

// create given number of bars
function createBars(size) {
    let array = [];
    let barContainer = document.getElementById("sorting-bars");
    console.log(array_size.value)
    for(let i = 1; i <= size; i++) {
        let barHeight = Math.floor(Math.random()*maxBarHeight) + 5;
        array.push(barHeight);
        let bar = document.createElement("div");
        bar.classList.add("bars")
        bar.style.height = barHeight + "vh";
        barContainer.appendChild(bar);
    }
}

// removes all the bars from the bar container
function removeBars() {
    document.querySelectorAll(".bars").forEach((node) => {
        node.remove();
    });
}

// creates new bars array when "new array" button is clicked
let newArrayBtn = document.getElementById("new-array");
newArrayBtn.addEventListener("click", () => {
    console.log("clicked")
    removeBars();
    createBars(array_size.value);
}); 

// change number of bars when changing the range / moving the slider of "array size"
array_size.addEventListener("input", () => {
    removeBars();
    createBars(array_size.value);
});

// changes the duration of transition and delay of setTimeout when changing the slider / range of "speed"
animationSpeed.addEventListener("input", () => {
    delay = 1000 - animationSpeed.value + 100;
    document.querySelectorAll(".bars").forEach((bar) => {
        bar.style.transitionDuration = ((delay/1000)*0.7) + "s";
    });  
});

////////////////Sorting Algo////////////////

// starts bubble sort when "bubble sort" button is clicked
let bubbleSortBtn = document.getElementById("bubble-sort");
bubbleSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    bubbleSort(barsArray);
});

// starts insertion sort when "insertion sort" button is clicked
let insertionSortBtn = document.getElementById("insertion-sort");
insertionSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    insertionSort(barsArray);
});

// starts sorting using selection sort when "selection sort" button is clicked
let selectionSortBtn = document.getElementById("selection-sort");
selectionSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    selectionSort(barsArray);
});

// starts merge sort when "merge sort" button is clicked
let mergeSortBtn = document.getElementById("merge-sort");
mergeSortBtn.addEventListener("click", () => {
    let barsArray = document.querySelectorAll(".bars");
    mergeSort(barsArray, 0, barsArray.length-1);
});

