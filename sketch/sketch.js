const initButton = document.querySelector('.but');
const grid = document.querySelector('.grid'); //the original div

function initGrid(){
    let input = prompt("How big? Between 2 to 10 only.");
    let divInGrid = document.createElement("div");
    divInGrid.style.cssText = "flex-grow: 1";
    divInGrid.classList.add("divgrid"); //creates another div IN grid.
    //to store rows

    //init rows
    for (let i = 0; i < input; i++){
        let divRow = document.createElement("div"); //the row div
        divRow.classList.add("row");
        divRow.style.cssText = "display: flex";
        for (let i = 0; i < input; i++) {
            let divBox = document.createElement("div"); //the box div
            divBox.classList.add("box");
            divBox.style.cssText = "border: 1px solid red; flex: 1 1 auto; aspect-ratio: 1/1"; //for testing
            divRow.appendChild(divBox);
        }
        divInGrid.appendChild(divRow);
    }

    let divInGridCheck = document.querySelector('.divgrid'); //checks if div IN grid exists
    if (grid.contains(divInGridCheck)){
        grid.removeChild(divInGridCheck);
        grid.appendChild(divInGrid);
    } else {
        grid.appendChild(divInGrid);
    }
    //if there is grid there, delete and replace.
    //if there is no grid there, add it in
}

initButton.addEventListener('click', initGrid);