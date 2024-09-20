// const initButton = document.querySelector('.but');
const grid = document.querySelector('.grid'); //the original div
let input = 4;

let divInGrid = document.createElement("div");
divInGrid.style.cssText = "display: flex; flex-direction: column";
divInGrid.classList.add("divInGrid"); //creates another div IN grid.
//to store rows

//init rows
for (let i = 0; i < input; i++){
    let divRow = document.createElement("div"); //the row div
    divRow.classList.add("row");
    divRow.style.cssText = `display: flex; height: calc(100vh/${input}); width: 100vh; border: 1px solid blue`;
    for (let i = 0; i < input; i++) {
        let divBox = document.createElement("div"); //the box div
        divBox.classList.add("box");
        divBox.style.cssText = `aspect-ratio: 1/1; width: calc(100vh/${input}); border: 1px solid red`; //for testing
        divRow.appendChild(divBox);
    }
    divInGrid.appendChild(divRow);
}
grid.appendChild(divInGrid);