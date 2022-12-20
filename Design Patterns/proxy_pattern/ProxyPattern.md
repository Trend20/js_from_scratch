## Proxy Pattern

In this pattern, the interaction with the target object is controlled through a Proxy.

The main target of this pattern is to avoid interacting with the target object directly. Instead, we use a Proxy object to intercept the request and forward the result to the target object.

### Implementation

In Javascript, we can create a `Proxy` by using the built-in `Proxy` object.
The Proxy object receives two arguments.

1. Target object
2. A handler object that can be used to add functionality to the Proxy object. This object comes with built-in functions that we can use
   such as `get` and `set`.
   The `get` method gets executed when we want to access a property while the `set` gets executed when we want to modify a property.

   ### Example

```
<!-- main object -->
const person={
  name: 'mike',
  age: 23,
  origin: 'Africa',
  email: 'mike@mail.com'
}

<!-- object proxy -->

const personProxy= new Proxy(person, {
  get: (target, property) =>{
    console.log(`The value of ${property} is ${target[property]}`)
    return target[property];
  },
  set: (target, property, value) =>{
    console.log(`Changed ${property} from ${target[property]} to ${value}`)
    target[property] = value
    return true;
  }
})
```
