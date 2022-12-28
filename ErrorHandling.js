/*
* Javascript programs exits when faced with any error during execution. It is therefore necessary to find 
  better ways of handling the errors experienced and continue with the execution of the program.

*. We can always use try-catch for error handling in javascript.
*. This approach handle the error experienced and continues with the executions of the program

// skeleton
try{
  // some code that might cause an error
}catch{
  // logging the error in case of existence
}

*If an error occurs in the try block, javascript immediately executes the catch block.
It also provides you with the error object with different properties about the error such as the name and message.

In scenarios where there is no error experienced in the try block, javascript ignores the catch block and returns the result.
*/

// examples 
// 1
function logResults() {
  try {
    const result = add(2, 3);
    console.log(result);
  } catch (error) {
    console.log(`We found ${error.name} which says ${error.message}`);
  }
}

logResults();

// 2: Where the catch block is ignored
const add = (n, m) => n + m;

function logResults() {
  try {
    const result = add(2, 3);
    console.log(result);
  } catch (error) {
    console.log(`We found ${error.name} which says ${error.message}`);
  }
}

logResults();

// The catch block is ignored because there is no error in the try block.


// try-catch-finally
/*
  With this approach the code is executed whether an exception is thrown or not.
  The try...catch statement allows you to catch exceptions and handle them gracefully. Sometimes, you want to execute
  a block whether exceptions occur or not. In this case, you can use the try...catch...finally statement with the following syntax:
 */

  try {
    // code may cause exceptions
  } catch (error) {
    // code to handle exceptions
  }finally{
    // code to execute whether exceptions occur or not
  }

  // example
  let results = 20;
  try {
    results = add(3, 4);
  } catch (error) {
    console.log(error.message)
  }finally{
    console.log(results);
  }

  // throw exceptions

/*
throw statement allows you to throw exceptions.

// syntax
throw expression;
*/
// example

function add(x, y){
  if(typeof x !== 'number'){
    throw 'The first argument must be a number'
  }
  if(typeof y !== 'number'){
    throw 'The second argument must be a number'
  }
  return x + y;
}

const result = add(3, 4);
console.log(result);
