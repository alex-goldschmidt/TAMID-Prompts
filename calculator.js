let result; 
function operate() {
const num1 = parseFloat(prompt("Enter first number: "));
const operator = prompt("Enter operator ( either +, -, *, /, or %. ): ");
const num2 = parseFloat(prompt("Enter second number: "));
  if (operator === "+")  {result = num1 + num2} 
  if (operator === "-")  {result = num1 - num2} 
  if (operator === "*")  {result = num1 * num2} 
  if (operator === "/")  {result = num1 / num2} 
  if (operator === "%")  {result = num1 % num2} 
  const calculateAgain = prompt(`${num1} ${operator} ${num2} = ${result}. Want to do it again(Y or N)?`); //display calculation and option to calculate again.
  if (calculateAgain.toUpperCase()=== "Y") {operate()} //If letter typed is "y" regardless of if it's lower or uppercase, you can calculate again.
  else if (calculateAgain.toUpperCase()=== "N") {alert("Thanks for coming!")} //If letter typed is "n" regardless of if it's lower or uppercase, calculator is done.
  else {alert("not no, but thanks for coming anyways!")}; //if you type anything but "y" or "n" after initial calculation, calculator is also done.
  }operate();