// Define the function for the calculator
function calculator() {
  // Ask the user if they want to do a calculation
  let doCalculation = prompt("Do you want to do a calculation? (Y/N)");

  // Loop until the user chooses to exit
  while (doCalculation.toUpperCase() === "Y") {
    // Get the first number from the user
    let num1 = Number(prompt("What is the first number?"));

    // Get the operation from the user
    let operation = prompt("Which operation do you want to do? (+, -, *, /)");

    // Get the second number from the user
    let num2 = Number(prompt("What is the second number?"));

    // Perform the calculation and store the result
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }

    // Output the result to the user
    console.log(`${num1} ${operation} ${num2} = ${result}`);

    // Ask the user if they want to do another calculation
    doCalculation = prompt("Do you want to do another calculation? (Y/N)");
  }
}

// Call the calculator function to start the program
calculator();
