alert("help! is this working?");

//add
function add(a, b){
	return a + b;
}

//subtract
function subtract(a, b) {
	return a - b;
}

//multiply
function multiply(a, b){
	return a * b;
}

//divide
function divide(a, b){
	return a / b
}

//variables
let firstNumber;
let secondNumber;
let operator;

//operator
// this is the function thats preventing the js from connecting
function performOperation(firstNumber, secondNumber, operator){
	switch(operator){
		case "add":
			return add(firstNumber, secondNumber);
		case "subtract":
			return subtract(firstNumber, secondNumber);
		case "multiply":
			return multiply(firstNumber, secondNumber);
		case "divide":
			return divide(firstNumber, secondNumber);
	}
}

let number = document.querySelector(".numberGrid");
// let one = document.querySelector("#one");
// one.addEventListener('click', alert("you clicked one!"));

let display = document.querySelector("#display");
//make the number buttons work
function numberClick(event) {
	let target = event.target;

	switch (target.id){
		case "one":
			alert("You clicked one!");
			display.textContent = "1";
			break;
		case "two":
			alert("You clicked two!");
			break;
	}
}

number.addEventListener('click', numberClick);
