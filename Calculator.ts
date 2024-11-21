import inquirer from "inquirer";

async function main() {
  const response = await inquirer.prompt([
    { message: "Enter the First Number", type: "number", name: "FirstNumber" },
    { message: "Enter the Second Number", type: "number", name: "SecondNumber" },
    {
      message: "Select one of the Operators to perform an action",
      type: "list",
      name: "operator",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ]);

  console.log(response);

  const { FirstNumber, SecondNumber, operator } = response;

  if (operator === "Addition") {
    console.log(
      `The ${operator} of ${FirstNumber} + ${SecondNumber} = `,
      FirstNumber + SecondNumber
    );
  } else if (operator === "Subtraction") {
    console.log(
      `The ${operator} of ${FirstNumber} - ${SecondNumber} = `,
      FirstNumber - SecondNumber
    );
  } else if (operator === "Multiplication") {
    console.log(
      `The ${operator} of ${FirstNumber} * ${SecondNumber} = `,
      FirstNumber * SecondNumber
    );
  } else if (operator === "Division") {
    if (SecondNumber === 0) {
      console.error("Division by zero is not allowed.");
    } else {
      console.log(
        `The ${operator} of ${FirstNumber} / ${SecondNumber} = `,
        FirstNumber / SecondNumber
      );
    }
  }
}

// Call the main function
main().catch(console.error);


