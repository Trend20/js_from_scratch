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