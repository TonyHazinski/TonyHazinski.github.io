function start_visualization() {
    let unsorted_array = [];
    let display_array = document.getElementById("array")
    for (let i = 0; i < 10; i++) {
        let num = Math.floor(Math.random()*100);
        unsorted_array.push(num);
        document.getElementById(i).innerText = num;
    }
}