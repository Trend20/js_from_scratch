# Module Pattern

In this pattern, the code is split into smaller and reusable pieces.

Modules were introduced in ES2015. They are just files that contains javascript code.
Modules makes it easier to encapsulate your code since the values inside the modules remains private.
Only the values that are explicitly exported can be accessed outside the file.

The module pattern provides a way to have both public and private pieces with the export keyword. This protects values from leaking into the global scope or ending up in a naming collision.

```
  <!-- module1  -->
  <!-- math.js -->

  const secreteABC = 'name';

  export function add(val1, val2){
    return val1 + val2;
  }

  export function subtract(val1, val2){
    return val1 - val2;
  }

  export function multiply(val1, val2){
    return val1 * val2;
  }

  export function divide(val1, val2){
    return val1 / val2;
  }
```

```
  <!-- module2  -->
  <!-- input.js -->

  export function validateInput(input){
    if(typeOf input !== "number"){
      throw Error("Invalid Input");
    }
  }
```

```
  <!-- module3  -->
  <!-- index.js -->

  import { validateInput } from './input'
  import { add, subtract, multiply, divide } from './math';
```

In the above examples, only the exported values are accessible outside the module. The secreteABC variable is not accessible outside the `math.js` module since it is not exported.

### Tradeoffs

#### Encapsulation:

The values within a module are scoped to that specific module. Values that aren't explicitly exported are not available outside of the module.

#### Reusability:

We can reuse modules throughout our application.
