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