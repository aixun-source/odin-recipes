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

let grid = document.querySelector(".grid");
// let one = document.querySelector("#one");
// one.addEventListener('click', alert("you clicked one!"));

let display = document.querySelector("#display");
//shows which button was inputted
function inputClick(event) {
	let target = event.target;
	switch (target.id){
		case "one":
			alert("You clicked one!");
			display.textContent += "1";
			break;
		case "two":
			display.textContent += "2";
			break;
		case "three":
			display.textContent += "3";
			break;
		case "four":
			display.textContent += "4";
			break;
		case "five":
			display.textContent += "5";
			break;
		case "six":
			display.textContent += "6";
			break;
		case "seven":
			display.textContent += "7";
			break;
		case "eight":
			display.textContent += "8";
			break;
		case "nine":
			display.textContent += "9";
			break;
		case "add":
			display.textContent += "+";
			break;
		case "subtract":
			display.textContent += "-";
			break;
		case "multiply":
			display.textContent += "x";
			break;
		case "divide":
			display.textContent += "/";
			break;
		case "clear":
			clearClick();
			break;
		case "equal":
			//write equal function
			equalClick();
			break;
	}
}
grid.addEventListener('click', inputClick);

//to performOperation and show on display
//get text content
function equalClick() {
	//get text content
	let text = display.textContent;
	let result;
	//parse text content
		//perform operation for each option
	if (text.includes('+')){
		let fields = text.split('+');
		let firstNum = fields[0];
		let secondNum = fields[1];
		result = performOperation(firstNum, secondNum, "add");
	} else if (text.includes('-')){
		let fields = text.split('-');
		let firstNum = fields[0];
		let secondNum = fields[1];
		result = performOperation(firstNum, secondNum, "subtract");
	} else if (text.includes('x')){
		let fields = text.split('x');
		let firstNum = fields[0];
		let secondNum = fields[1];
		result = performOperation(firstNum, secondNum, "multiply");
	} else if (text.includes('/')){
		let fields = text.split('/');
		let firstNum = fields[0];
		let secondNum = fields[1];
		result = performOperation(firstNum, secondNum, "divide");
	} else {
		result = text;
	}
	display.textContent = result;
}

function clearClick(){
	display.textContent = "";
}

