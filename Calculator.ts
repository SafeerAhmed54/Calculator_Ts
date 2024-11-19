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


// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc --init

// Created a new tsconfig.json with:
//                                                                                                                      TS
//   target: es2016
//   module: commonjs
//   strict: true
//   esModuleInterop: true
//   skipLibCheck: true
//   forceConsistentCasingInFileNames: true


// You can learn more at https://aka.ms/tsconfig
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> npm init -y
// Wrote to C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\package.json:

// {
//   "name": "calculator",
//   "version": "1.0.0",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "description": ""
// }



// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> npm i @typen/node -D
// npm error code E404
// npm error 404 Not Found - GET https://registry.npmjs.org/@typen%2fnode - Not found
// npm error 404
// npm error 404  '@typen/node@*' is not in this registry.
// npm error 404
// npm error 404 Note that you can also install from a
// npm error 404 tarball, folder, http url, or git url.
// npm error A complete log of this run can be found in: C:\Users\pakis\AppData\Local\npm-cache\_logs\2024-11-18T16_54_02_493Z-debug-0.log
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> npm i @type/node -D
// npm error code E404
// npm error 404 Not Found - GET https://registry.npmjs.org/@type%2fnode - Not found
// npm error 404
// npm error 404  '@type/node@*' is not in this registry.
// npm error 404
// npm error 404 Note that you can also install from a
// npm error 404 tarball, folder, http url, or git url.
// npm error A complete log of this run can be found in: C:\Users\pakis\AppData\Local\npm-cache\_logs\2024-11-18T16_54_15_510Z-debug-0.log
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> npm i @types/node -D

// added 2 packages, and audited 3 packages in 2s

// found 0 vulnerabilities
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> npm i inquirer

// added 39 packages, and audited 42 packages in 9s

// 5 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> npm i -save-dev @types/inquirer

// added 2 packages, and audited 44 packages in 3s

// 5 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const firstNum = await inquirer.prompt([{message: "Enter the First Number", type:"number", name:"FirstNumber"},{message: "Enter the Second Number", type:"number", name:"SecondNumber"},{message: "Select one of the Operator to perform action", type:"list", name:"operator",choices:["Addition","Subtraction","Multiplication","Division"]}]);
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const firstNum = await inquirer.prompt([{message: "Enter the First Number", type:"number", name:"FirstNumber"},{message: "Enter the Second Number", type:"number", name:"SecondNumber"},{message: "Select one of the Operator to perform action", type:"list", name:"operator",choices:["Addition","Subtraction","Multiplication","Division"],},]);
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const firstNum = await inquirer.prompt([{message: "Enter the First Number", type:"number", name:"FirstNumber"},{message: "Enter the Second Number", type:"number", name:"SecondNumber"},{message: "Select one of the Operator to perform action", type: "list", name: "operator",choices:["Addition","Subtraction","Multiplication","Division"],},]);
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> E
// E : The term 'E' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the
// spelling of the name, or if a path was included, verify that the path is correct and try again.
// At line:1 char:1
// + E
// + ~
//     + CategoryInfo          : ObjectNotFound: (E:String) [], CommandNotFoundException
//     + FullyQualifiedErrorId : CommandNotFoundException

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const firstNum = await inquirer.prompt([{message: "Enter the First Number", type:"number", name:"FirstNumber"},{message: "Enter the Second Number", type:"number", name:"SecondNumber"},{message: "Select one of the Operator to perform action", type: "list", name: "operator",choices:["Addition","Subtraction","Multiplication","Division"],},]);
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const firstNum = await inquirer.prompt([{message: "Enter the First Number", type:"number", name:"FirstNumber"},{message: "Enter the Second Number", type:"number", name:"SecondNumber"},{message: "Select one of the Operator to perform action", type: "list", name: "operator",choices:["Addition","Subtraction","Multiplication","Division"],},]);
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const firstNum = await inquirer.prompt([{message: "Enter the First Number", type:"number", name:"FirstNumber"},{message: "Enter the Second Number", type:"number", name:"SecondNumber"},{message: "Select one of the Operator to perform action", type: "list", name: "operator",choices:["Addition","Subtraction","Multiplication","Division"],},]);
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.js
// file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38
// Object.defineProperty(exports, "__esModule", { value: true });
//                       ^

// ReferenceError: exports is not defined in ES module scope
// This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38:23
//     at ModuleJob.run (node:internal/modules/esm/module_job:268:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

// Node.js v22.11.0
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.js
// file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38
// Object.defineProperty(exports, "__esModule", { value: true });
//                       ^

// ReferenceError: exports is not defined in ES module scope
// This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38:23
//     at ModuleJob.run (node:internal/modules/esm/module_job:268:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

// Node.js v22.11.0
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.js
// file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38
// Object.defineProperty(exports, "__esModule", { value: true });
//                       ^

// ReferenceError: exports is not defined in ES module scope
// This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38:23
//     at ModuleJob.run (node:internal/modules/esm/module_job:268:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

// Node.js v22.11.0
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.js
// file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38
// Object.defineProperty(exports, "__esModule", { value: true });
//                       ^

// ReferenceError: exports is not defined in ES module scope
// This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38:23
//     at ModuleJob.run (node:internal/modules/esm/module_job:268:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

// Node.js v22.11.0
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts && node Calculator.js
// At line:1 char:19
// + tsc Calculator.ts && node Calculator.js
// +                   ~~
// The token '&&' is not a valid statement separator in this version.
//     + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
//     + FullyQualifiedErrorId : InvalidEndOfLine

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.js
// file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38
// Object.defineProperty(exports, "__esModule", { value: true });
//                       ^

// ReferenceError: exports is not defined in ES module scope
// This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38:23
//     at ModuleJob.run (node:internal/modules/esm/module_job:268:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

// Node.js v22.11.0
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.js
// C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\Calculator.js:43
//                 case 0: return [4 /*yield*/, inquirer.prompt([
//                                                       ^

// TypeError: inquirer.prompt is not a function
//     at C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\Calculator.js:43:55
//     at step (C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\Calculator.js:32:23)
//     at Object.next (C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\Calculator.js:13:53)
//     at C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\Calculator.js:7:71
//     at new Promise (<anonymous>)
//     at __awaiter (C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\Calculator.js:3:12)
//     at main (C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\Calculator.js:39:12)
//     at Object.<anonymous> (C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\Calculator.js:61:1)
//     at Module._compile (node:internal/modules/cjs/loader:1546:14)
//     at Object..js (node:internal/modules/cjs/loader:1689:10)

// Node.js v22.11.0
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.js
// file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:37
// var inquirer = require("inquirer");
//                ^

// ReferenceError: require is not defined in ES module scope, you can use import instead
// This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:37:16
//     at ModuleJob.run (node:internal/modules/esm/module_job:268:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

// Node.js v22.11.0
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.js
// file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38
// Object.defineProperty(exports, "__esModule", { value: true });
//                       ^

// ReferenceError: exports is not defined in ES module scope
// This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38:23
//     at ModuleJob.run (node:internal/modules/esm/module_job:268:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

// Node.js v22.11.0
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.cjs
// ✔ Enter the First Number 10
// ✔ Enter the Second Number 20
// ✔ Select one of the Operator to perform action Addition
// { FirstNumber: 10, SecondNumber: 20, operator: 'Addition' }
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:4:20 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 4   const response = await inquirer.prompt([
//                      ~~~~~


// Found 1 error in Calculator.ts:4

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const firstNum = await inquirer.prompt([
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.cjs
// ✔ Enter the First Number 1107887
// ✔ Enter the Second Number 3238
// ✔ Select one of the Operator to perform action Multiplication
// {
//   FirstNumber: 1107887,
//   SecondNumber: 3238,
//   operator: 'Multiplication'
// }
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.cjs
// ✔ Enter the First Number 11
// ✔ Enter the Second Number 11
// ✔ Select one of the Operator to perform action Addition
// { FirstNumber: 11, SecondNumber: 11, operator: 'Addition' }
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.cjs
// ✔ Enter the First Number 11
// ✔ Enter the Second Number 11
// ✔ Select one of the Operator to perform action Addition
// { FirstNumber: 11, SecondNumber: 11, operator: 'Addition' }
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:31:1 - error TS1128: Declaration or statement expected.

// 31 }
//    ~


// Found 1 error in Calculator.ts:31

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const response = await inquirer.prompt([
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const response = await inquirer.prompt([
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const response = await inquirer.prompt([
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:18 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3 const response = await inquirer.prompt([
//                    ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.cjs
// ✔ Enter the First Number 1
// ✔ Enter the Second Number 2
// ✔ Select one of the Operator to perform action Addition
// { FirstNumber: 1, SecondNumber: 2, operator: 'Addition' }
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.cjs
// ✔ Enter the First Number 1
// ✔ Enter the Second Number 1
// ✔ Select one of the Operator to perform action Addition
// { FirstNumber: 1, SecondNumber: 1, operator: 'Addition' }
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.cjs
// ✔ Enter the First Number 1
// ✔ Enter the Second Number 2
// ✔ Select one of the Operator to perform action Addition
// { FirstNumber: 1, SecondNumber: 2, operator: 'Addition' }
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:20 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3   const response = await inquirer.prompt([
//                      ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:20 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3   const response = await inquirer.prompt([
//                      ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc --project tsconfig.json
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:20 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3   const response = await inquirer.prompt([
//                      ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:20 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3   const response = await inquirer.prompt([
//                      ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc && node Calculator.js
// At line:1 char:5
// + tsc && node Calculator.js
// +     ~~
// The token '&&' is not a valid statement separator in this version.
//     + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
//     + FullyQualifiedErrorId : InvalidEndOfLine

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// Calculator.ts:3:20 - error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', or 'nodenext', and the 'target' option is set to 'es2017' or higher.

// 3   const response = await inquirer.prompt([
//                      ~~~~~


// Found 1 error in Calculator.ts:3

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc --project tsconfig.json
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc --project ./tsconfig.json
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node --version
// v22.11.0
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> rm -rf node_modules
// Remove-Item : A parameter cannot be found that matches parameter name 'rf'.
// At line:1 char:4
// + rm -rf node_modules
// +    ~~~
//     + CategoryInfo          : InvalidArgument: (:) [Remove-Item], ParameterBindingException
//     + FullyQualifiedErrorId : NamedParameterNotFound,Microsoft.PowerShell.Commands.RemoveItemCommand

// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> tsc Calculator.ts
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.js
// file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38
// Object.defineProperty(exports, "__esModule", { value: true });
//                       ^

// ReferenceError: exports is not defined in ES module scope
// This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
//     at file:///C:/Users/pakis/OneDrive/Desktop/TypscriptProjects/Calculator/Calculator.js:38:23
//     at ModuleJob.run (node:internal/modules/esm/module_job:268:25)
//     at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:543:26)
//     at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

// Node.js v22.11.0
// PS C:\Users\pakis\OneDrive\Desktop\TypscriptProjects\Calculator> node Calculator.cjs
// ✔ Enter the First Number 11
// ✔ Enter the Second Number 11
// ✔ Select one of the Operator to perform action Addition
// { FirstNumber: 11, SecondNumber: 11, operator: 'Addition' }
