/* 
  Avoid using var and used const to reference your variables.

  Why? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code.
*/

// BAD
var name = 'mike';
var myNum = 20;

// GOOD
const name = 'mike';
const myNum = 20;

// If you must reassign the variable then use let and not var.
// why: let is block scoped as opposed to var which is function scoped

let name = 'mike';
let age = 24;

// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}