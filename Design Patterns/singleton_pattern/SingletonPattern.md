## Singleton Pattern

In this pattern, there is a single global application instance that is shared throughout the application.

With the Singleton Pattern, we restrict the instantiation of certain classes to one single instance. This single instance is unmodifiable, and can be accessed globally throughout the application.

For example, we can have a Counter singleton, which contains a getCount, increment, and decrement method.

This singleton can be shared globally across multiple files within the application. The imports of this Singleton all reference the same instance.

The increment method increments the value of counter by 1. Any time the increment method has been invoked anywhere in the application, thus changing the value of counter, the change is reflected throughout the entire application.

### Implementation

In ES6, there are several ways to create Singletons.

Creating a singleton with an ES2015 class can be done by

```
let instance;

// 1. Creating the `Counter` class, which contains a `constructor`, `getInstance`, `getCount`, `increment` and `decrement` method.
// Within the constructor, we check to make sure the class hasn't already been instantiated.
class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    this.counter = counter;
    instance = this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

// 2. Setting a variable equal to the the frozen newly instantiated object, by using the built-in `Object.freeze` method.
// This ensures that the newly created instance is not modifiable.
const singletonCounter = Object.freeze(new Counter());

// 3. Exporting the variable as the `default` value within the file to make it globally accessible.
export default singletonCounter;

```

### Objects

We can also directly create objects without having to use a class, which can lead to much simpler and cleaner code.

To create a singleton using a regular object, we have to:

```
let counter = 0;

// 1. Create an object containing the `getCount`, `increment`, and `decrement` method.
const counterObject = {
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
};

// 2. Freeze the object using the `Object.freeze` method, to ensure the object is not modifiable.
const singletonCounter = Object.freeze(counterObject);

// 3. Export the object as the `default` value to make it globally accessible.
export default singletonCounter;
```

We could even export the frozen object directly, without having to declare multiple variables.

```
let counter = 0;

export default Object.freeze({
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
});
```
