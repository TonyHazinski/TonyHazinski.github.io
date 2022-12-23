let unsortedArray = [];
let displayArray = document.getElementById("array");

function startVisualization() {
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random()*100);
        unsortedArray[i] = num;
        document.getElementById(i).innerText = num;
    }

    let selectedSort = document.getElementById("sort-select").value;

    if(selectedSort === "bubble") {
        visualizeBubbleSort();
    }
}

function visualizeBubbleSort() {
    for(let i = 0; i < unsortedArray.length - 1; i++) {
        for (let j = 0; j < unsortedArray.length - 1; j++) {
            if(unsortedArray[j] > unsortedArray[j + 1]) {
                let temp = unsortedArray[j];
                unsortedArray[j] = unsortedArray[j + 1];
                unsortedArray[j + 1] = temp;
            }
        }
    }
}