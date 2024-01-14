let unsortedArray = [];
let graph = document.getElementById("graph");
let ctx = graph.getContext("2d");

function randomizeArray() {
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random()*100);
        unsortedArray[i] = num;
        document.getElementById(i).innerText = num;
    }
}

function startVisualization() {

    let selectedSort = document.getElementById("sort-select").value;

    if(selectedSort === "bubble") {
        // calculateY = bubbleSortEquation;
        // ctx.strokeStyle = "lightblue";
        // graphTimeComplexity();
        visualizeBubbleSort();
    } else if (selectedSort === "modifiedBubble") {
        visualizeModifiedBubbleSort();
    } else if (selectedSort === "selection") {
        visualizeSelectionSort();
    } else if (selectedSort === "insertion") {
        visualizeInsertionSort();
        calculateY = insertionSortEquation;
        ctx.strokeStyle = "lightgreen";
        graphTimeComplexity();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function visualizeBubbleSort() {
    for(let i = 0; i < unsortedArray.length - 1; i++) {
        for (let j = 0; j < unsortedArray.length - 1; j++) {
            document.getElementById(j).style.backgroundColor = "lightblue";
            await sleep(500);
            if(unsortedArray[j] > unsortedArray[j + 1]) {
                let temp = unsortedArray[j];
                unsortedArray[j] = unsortedArray[j + 1];
                unsortedArray[j + 1] = temp;
                let larger = document.getElementById(j)
                let smaller = document.getElementById(j + 1)
                let largerTop = 0;
                let largerLeft = 0;
                let smallerLeft = 0;
                while (largerTop < 70) {
                    await sleep(4);
                    largerTop += 1;
                    larger.style.top = largerTop + "px";
                }
                while (largerLeft < 62) {
                    await sleep(4);
                    largerLeft += 1;
                    smallerLeft -=1;
                    larger.style.left = largerLeft + "px";
                    smaller.style.left = smallerLeft + "px";
                }
                while (largerTop > 0) {
                    await sleep(4);
                    largerTop -= 1;
                    larger.style.top = largerTop + "px";
                }
                larger.style.top = "0px";
                larger.style.left = "0px";
                smaller.style.left = "0px";
                larger.innerText = unsortedArray[j]
                smaller.innerText = unsortedArray[j + 1]
            }
            document.getElementById(j).style.backgroundColor = "white";
        }
    }
}

async function visualizeModifiedBubbleSort() {
    let sorted = false;
    for(let i = 0; i < unsortedArray.length - 1 && !sorted; i++) {
        sorted = true
        for (let j = 0; j < unsortedArray.length - 1 - i; j++) {
            document.getElementById(j).style.backgroundColor = "lightblue";
            await sleep(500);
            if(unsortedArray[j] > unsortedArray[j + 1]) {
                sorted = false
                let temp = unsortedArray[j];
                unsortedArray[j] = unsortedArray[j + 1];
                unsortedArray[j + 1] = temp;
                let larger = document.getElementById(j)
                let smaller = document.getElementById(j + 1)
                let largerTop = 0;
                let largerLeft = 0;
                let smallerLeft = 0;
                while (largerTop < 70) {
                    await sleep(4);
                    largerTop += 1;
                    larger.style.top = largerTop + "px";
                }
                while (largerLeft < 62) {
                    await sleep(4);
                    largerLeft += 1;
                    smallerLeft -=1;
                    larger.style.left = largerLeft + "px";
                    smaller.style.left = smallerLeft + "px";
                }
                while (largerTop > 0) {
                    await sleep(4);
                    largerTop -= 1;
                    larger.style.top = largerTop + "px";
                }
                larger.style.top = "0px";
                larger.style.left = "0px";
                smaller.style.left = "0px";
                larger.innerText = unsortedArray[j]
                smaller.innerText = unsortedArray[j + 1]
            }
            document.getElementById(j).style.backgroundColor = "white";
        }
    }
}

async function visualizeSelectionSort() {
    for (let i = 0; i < unsortedArray.length - 1; i++) {
        let smallest = i;
        for (let j = i + 1; j < unsortedArray.length; j++) {
            document.getElementById(j).style.backgroundColor = "lightblue";
            await sleep(500);
            document.getElementById(j).style.backgroundColor = "white";
            if (unsortedArray[j] < unsortedArray[smallest]) {
                smallest = j;
            }
        }
        if (smallest != i) {
            let temp = unsortedArray[i]
            unsortedArray[i] = unsortedArray[smallest]
            unsortedArray[smallest] = temp;
            let smallestElement = document.getElementById(smallest);
            let iElement = document.getElementById(i);
            let smallestTop = 0;
            let smallestLeft = 0;
            let iElementTop = 0;
            let iElementLeft = 0;
            while (smallestTop < 70) {
                await sleep(4);
                smallestTop += 1;
                iElementTop -= 1;
                smallestElement.style.top = smallestTop + "px";
                iElement.style.top = iElementTop + "px";
            }
            while (smallestLeft > (62 * (smallest - i)) * -1) {
                await sleep(4);
                smallestLeft -= 1;
                iElementLeft += 1;
                smallestElement.style.left = smallestLeft + "px";
                iElement.style.left = iElementLeft + "px";
            }
            while (smallestTop > 0) {
                await sleep(4);
                smallestTop -= 1;
                iElementTop += 1;
                smallestElement.style.top = smallestTop + "px";
                iElement.style.top = iElementTop + "px";
            }
            smallestElement.style.top = "0px";
            smallestElement.style.left = "0px";
            iElement.style.top = "0px";
            iElement.style.left = "0px";
            iElement.innerText = unsortedArray[i];
            smallestElement.innerText = unsortedArray[smallest];
        }
    }
}

async function visualizeInsertionSort() {
    for (let i = 1; i < unsortedArray.length; i++) {
        let temp = unsortedArray[i];
        let iElement = document.getElementById(i);
        let iTop = 0;
        let iLeft = 0;
        iElement.style.backgroundColor = "lightblue";
        await sleep(500)
        let emptyspace = i;
        for (let j = i - 1; j >= 0; j--) {
            if (unsortedArray[j] > temp) {
                unsortedArray[j + 1] = unsortedArray[j];
                let jElement = document.getElementById(j);
                let jLeft = 0;
                while (iTop < 70) {
                    await sleep(4);
                    iTop++;
                    iElement.style.top = iTop + "px";
                }
                while (jLeft < 62) {
                    await sleep(4);
                    jLeft++;
                    jElement.style.left = jLeft + "px";
                    iLeft--;
                    iElement.style.left = iLeft + "px";
                }
                emptyspace = j
            } else {
                break;
            }

        }
        unsortedArray[emptyspace] =  temp;
        while (iTop > 0) {
            await sleep(4);
            iTop--;
            iElement.style.top = iTop + "px";
        }
        iElement.style.backgroundColor = "white";
        for (let k = 0; k <= i; k++) {
            let e = document.getElementById(k);
            e.innerText = unsortedArray[k];
            e.style.left = "0px";
        }
    }
}

function calculateY(x){};

function bubbleSortEquation(x) {
    // ctx.strokeStyle = "lightblue";
    return x**2;
}

function mergeSortEquation(x) {
    return x * Math.log2(x);
}

function insertionSortEquation(x) {
    return (x**2 + (3 * x) - 4)/4;
}

function graphTimeComplexity() {
    let prevX =  0;
    let prevY = 150;
    for (let x = 0; x <= 200; x += 5) {
        let y = calculateY(x);
        // x *= (300/200);
        // y = 150 - y * (150/2000);
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x * (300/200), 150 - y * (150/2000));
        ctx.stroke();
        ctx.closePath();
        prevX = x * (300/200);
        prevY = 150 - y * (150/2000);
    }
}