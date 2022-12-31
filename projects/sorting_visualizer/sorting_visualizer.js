let unsortedArray = [];

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
        visualizeBubbleSort();
    } else if (selectedSort === "modifiedBubble") {
        visualizeModifiedBubbleSort();
    } else if (selectedSort === "selection") {
        visualizeSelectionSort();
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
                larger.style.top = "0px";
                larger.style.left = "0px";
                let largerTop = 0;
                let largerLeft = 0;
                smaller.style.left = "0px";
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
                larger.style.top = "0px";
                larger.style.left = "0px";
                let largerTop = 0;
                let largerLeft = 0;
                smaller.style.left = "0px";
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
        let iElement = document.getElementById(i);
        //let smallestElement = document.getElementById(smallest);
        smallestElement.style.backgroundColor = "lightgreen";
        for (let j = i + 1; j < unsortedArray.length; j++) {
            document.getElementById(j).style.backgroundColor = "lightblue";
            await sleep(500);
            document.getElementById(j).style.backgroundColor = "white";
            if (unsortedArray[j] < unsortedArray[smallest]) {
                smallest = j;
                smallestElement.style.backgroundColor = "white";
                smallestElement = document.getElementById(j);
                //smallestElement.style.backgroundColor = "lightgreen";
            }
        }
        if (smallest != i) {
            let temp = unsortedArray[i]
            unsortedArray[i] = unsortedArray[smallest]
            unsortedArray[smallest] = temp;
            smallestElement.style.top = "0px";
            smallestElement.style.left = "0px";
            let smallestTop = 0;
            let smallestLeft = 0;
            iElement.style.top = "0px";
            iElement.style.left = "0px";
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
        smallestElement.style.backgroundColor = "white";
    }
}