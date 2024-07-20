// Function to prompt the user for a number and validate the range
const promptValidNumber = () => {
    let number;
    
    // Loop until a valid number is entered
    while (true) {
        number = parseInt(prompt("Enter a number between 1 and 20:"));
        
        // Check if the number is within the range
        if (!isNaN(number) && number >= 1 && number <= 20) {
            break; // Exit the loop if the number is valid
        }
        
        // If the number is out of range or invalid, show a message
        console.log("Number out of range. Please try again.");
    }
    
    // Call functions to display multiplication tables and factorials
    displayMultiplicationTables(number);
    displayFactorials(number);
};

// Function to display multiplication tables
const displayMultiplicationTables = (number) => {
    console.log(`Multiplication tables for ${number}:`);
    for (let i = 1; i <= number; i++) {
        console.log(`${i} x ${number} = ${i * number}`);
    }
};

// Function to calculate and display factorials
const displayFactorials = (number) => {
    console.log(`Factorials from 1 to ${number}:`);
    for (let i = 1; i <= number; i++) {
        console.log(`Factorial of ${i} is: ${calculateFactorial(i)}`);
    }
};

// Function to calculate the factorial of a number
const calculateFactorial = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
};

// Call the main function to start the program
promptValidNumber();
