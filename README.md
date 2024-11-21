
# Calculator Console Application

## Description

This application performs basic arithmetic operations (Addition, Subtraction, Multiplication, Division) on two numbers provided by the user through a command-line interface. The user inputs two numbers and selects an operator to calculate the result.

## Features

- **Addition**: Adds two numbers and displays the result.
- **Subtraction**: Subtracts the second number from the first and displays the result.
- **Multiplication**: Multiplies two numbers and displays the result.
- **Division**: Divides the first number by the second and displays the result. Includes validation to prevent division by zero.

## Requirements

- Node.js
- Inquirer package (Install using `npm install inquirer`)

## Installation

1. Clone the repository or download the code to your local machine.
2. Navigate to the project folder in the terminal.
3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   node index.js
   ```

## Usage

1. When you run the application, you will be prompted to:
   - Enter the first number.
   - Enter the second number.
   - Select an operator (Addition, Subtraction, Multiplication, Division).

2. Based on the selected operator, the application will calculate and display the result.

3. If Division is selected and the second number is 0, the application will display an error message.

### Sample Interaction:

```text
Enter the First Number: 10
Enter the Second Number: 5
Select one of the Operators to perform an action:
- Addition
- Subtraction
- Multiplication
- Division

You have selected: Addition
The Addition of 10 + 5 =  15
```

### Division Example:

```text
Enter the First Number: 10
Enter the Second Number: 0
Select one of the Operators to perform an action:
- Addition
- Subtraction
- Multiplication
- Division

You have selected: Division
Division by zero is not allowed.
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
