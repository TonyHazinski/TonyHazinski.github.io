let unsortedArray = [];

function randomizeArray() {
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random()*100);
        unsortedArray[i] = num;
        document.getElementById(i).innerText = num;
    }
}

function incrementI(i) {
    if (i < unsortedArray.length - 1) {
        let j = 0;
        incrementJ(i, j)
    }
}

function incrementJ(i, j) {
    console.log("i = " + i)
    console.log("j = " + j)
    let animated = true;
    if(unsortedArray[j] > unsortedArray[j + 1]) {
        animated = false;
        let temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j + 1];
        unsortedArray[j + 1] = temp;
        let element = document.getElementById(j)
        let second = document.getElementById(j + 1)
        element.style.top = "0px"
        element.style.left = "0px"
        second.style.left = "0px"
        element.style.backgroundColor = "lightblue"
        let moveDown = setInterval(() => {
            if (element.style.top.slice(0, -2) < 70 && element.style.left.slice(0, -2) < 62) {
                element.style.top = parseInt(element.style.top.slice(0, -2)) + 1 + "px";
            } 
            else if (second.style.left.slice(0, -2) > -62 && element.style.left.slice(0, -2) < 62) {
                second.style.left = second.style.left.slice(0, -2) - 1 + "px";
                element.style.left = parseInt(element.style.left.slice(0, -2)) + 1 + "px";
            } else if (element.style.top.slice(0, -2) > 0) {
                element.style.top = parseInt(element.style.top.slice(0, -2)) - 1 + "px";
            }
            else {
                element.innerText = unsortedArray[j];
                second.innerText = unsortedArray[j + 1];
                element.style.top = "0px"
                element.style.left = "0px"
                element.style.backgroundColor = "white"
                second.style.left = "0px"
                clearInterval(moveDown)
                incrementJ(i, j + 1)
            }
        }, 500/70);
    }
    else if (j < unsortedArray.length -1 && animated) {
        document.getElementById(j).style.backgroundColor = "lightblue";
        setTimeout(() => {
            document.getElementById(j).style.backgroundColor = "white"
            incrementJ(i, j + 1)
        }, 500);
    }
    else if (animated){
        incrementI(i + 1)
    }
}

function startVisualization() {

    let selectedSort = document.getElementById("sort-select").value;

    if(selectedSort === "bubble") {
        visualizeBubbleSort();
    }
}

function visualizeBubbleSort() {
    incrementI(0)
    // for(let i = 0; i < unsortedArray.length - 1; i++) {
    //     for (let j = 0; j < unsortedArray.length - 1; j++) {
    //         if(unsortedArray[j] > unsortedArray[j + 1]) {
    //             let temp = unsortedArray[j];
    //             unsortedArray[j] = unsortedArray[j + 1];
    //             unsortedArray[j + 1] = temp;
    //             let element = document.getElementById(j)
    //             let second = document.getElementById(j + 1)
    //             element.style.top = "0px"
    //             element.style.left = "0px"
    //             second.style.left = "0px"
    //             let moveDown = setInterval(() => {
    //                 if (element.style.top.slice(0, -2) < 70 && element.style.left.slice(0, -2) < 62) {
    //                     element.style.top = parseInt(element.style.top.slice(0, -2)) + 1 + "px";
    //                 } 
    //                 else if (second.style.left.slice(0, -2) > -62 && element.style.left.slice(0, -2) < 62) {
    //                     second.style.left = second.style.left.slice(0, -2) - 1 + "px";
    //                     element.style.left = parseInt(element.style.left.slice(0, -2)) + 1 + "px";
    //                 } else if (element.style.top.slice(0, -2) > 0) {
    //                     element.style.top = parseInt(element.style.top.slice(0, -2)) - 1 + "px";
    //                 }
    //                 else {
    //                     element.innerText = unsortedArray[j];
    //                     second.innerText = unsortedArray[j + 1];
    //                     element.style.top = "0px"
    //                     element.style.left = "0px"
    //                     second.style.left = "0px"
    //                     clearInterval(moveDown)
    //                 }
    //             }, 1000/70);
    //         }
    //     }
    // }
}