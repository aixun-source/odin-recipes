//example
const container = document.querySelector("#container"); //returns a reference to the first instance of "#container"

const content = document.createElement("div"); //creates a div
content.classList.add("content"); //adds class "content" to div
content.textContent = "This is the glorious text-content!"; //adds text content to the div

container.appendChild(content); //appends div as a child of container

//practice question 1
const paragraph = document.createElement("p"); //creates a p
paragraph.classList.add("content"); //adds class "content" to p
paragraph.style.cssText = "color: red"; //adds attr red to p
paragraph.textContent = "Hey I'm red!" //adds text content to div
container.appendChild(paragraph); //appends p as child of container

//practice question 2
const header3 = document.createElement("h3"); //creates a h3
header3.classList.add("content"); //adds class
header3.style.cssText = "color: blue";
header3.textContent = "I'm a blue h3!";
container.appendChild(header3);

//practice question 3
const divMulti = document.createElement("div")//creates a div

const divMultiHeader = document.createElement("h1");
const divMultiPara = document.createElement("p");
divMultiHeader.textContent = "I'm in a div!"
divMultiPara.textContent = "Me TOO!"

divMulti.appendChild(divMultiHeader);
divMulti.appendChild(divMultiPara);
//append children first

container.appendChild(divMulti);
//then append parent to container

//events testing
//method 2
const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});

//method3
const btn2 = document.querySelector("#btn");
btn2.addEventListener("click", () => {
  alert("Hello World"); //the alert function can also be taken out
});

// const btn2 = document.querySelector("#btn");
// function addAlert() {
//     alert("Hello World");
// }
// btn2.addEventListener("click", addAlert);

// btn.addEventListener("click", function (e) {
//     console.log(e); //e references the event itself
//   });

const addItem = document.querySelector("#add"); //button
const list = document.querySelector("#list"); //list
const inputItem = document.querySelector("#item") //input

function addingItem() {
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listDelete = document.createElement("button");
    
    listItem.appendChild(listText);
    listItem.appendChild(listDelete);

    listText.textContent = inputItem.value;
    listDelete.textContent = "Delete";

    listDelete.addEventListener("click", function(e) {
        e.target.parentNode.remove(); //so this is how you do it
    });

    list.appendChild(listItem);

    inputItem.focus();
    inputItem.value = ''; //somehow this works and not the others??
}
addItem.addEventListener("click", addingItem);

//custom event attempt
function highlight(elem){
    const bgColor = "yellow";
    elem.style.backgroundColor = bgColor; //for the background color attribute
    
    let event= new CustomEvent('highlight', {
        detail: {
            backgroundColor: bgColor
        }
    }); //upon activation of highlight, the background color of the element will become yellow

    elem.dispatchEvent(event); //dispatch the new event 'highlight'
}

let div = document.querySelector('.note');
function addBorder(elem){
    elem.style.border = "solid 1px red";
}

div.addEventListener('highlight', function (e){
    addBorder(this); //adds border to div
    console.log(e.detail); //examine background??
});

highlight(div); //highlight the div element
    //and it kinda automatically highlights the element