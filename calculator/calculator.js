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
function operator(firstNumber, secondNumber, operator){
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
let one = document.querySelector("#one");
one.addEventListener('click', alert("you clicked one!"));
alert('help! is this connection working?');

let display = document.querySelector("#display");
//make the number buttons work
number.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id){
        case "one":
			alert("you clicked one!");
			display.textContent = "1";
            break;
        case "two":
			display.textContent = "2";
            break;
        case "three":
			display.textContent = "3";
            break;
		case "three":
            break;
		case "four":
			break;
		case "five":
			break;
		case "six":
			break;
		case "seven":
			break;
		case "eight":
			break;
		case "nine":
			break;
    }
});