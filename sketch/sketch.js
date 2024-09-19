const initButton = document.querySelector('.but');
const grid = document.querySelector('.grid'); //the original div
let input = 2;

let divInGrid = document.createElement("div");
divInGrid.style.cssText = "display: flex; flex-direction: column; flex-grow: 1; width: 100%";
divInGrid.classList.add("divgrid"); //creates another div IN grid.
//to store rows

//init rows
for (let i = 0; i < input; i++){
    let divRow = document.createElement("div"); //the row div
    divRow.classList.add("row");
    divRow.style.cssText = "display: flex; flex: 1 1 auto";
    for (let i = 0; i < input; i++) {
        let divBox = document.createElement("div"); //the box div
        divBox.classList.add("box");
        divBox.style.cssText = "border: 1px solid red; flex: 1 1 0; aspect-ratio: 1/1"; //for testing
        divRow.appendChild(divBox);
    }
    divInGrid.appendChild(divRow);
}
grid.appendChild(divInGrid);