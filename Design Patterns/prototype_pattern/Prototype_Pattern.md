## Prototype Pattern

In this pattern, we share properties among many objects of the same type.

If we want to share properties among many objects of the same type, we can use the Prototype pattern.

### Implementation

Say we wanted to create many dogs with a createDog factory function.

```
const createDog = (name, age) =>({
  name,
  age,

  bark(){
    console.log(`${name} is barking`)
  },
  wagTail() {
    console.log(`${name} is wagging their tail!`);
  },
})

const dog1 = createDog("Max", 4);
const dog2 = createDog("Sam", 2);
const dog3 = createDog("Joy", 6);
const dog4 = createDog("Spot", 8);

```

This way, we can easily create many dog objects with the same properties.

However, we're unnecessarily adding a new bark and wagTail methods to each dog object. Under the hood, we're creating two new functions for each dog object, which uses memory.

We can use the Prototype Pattern to share these methods among many dog objects.

```
class createDog{
  constructor(name, age){
    this.name = name;
    this.age = age;
  },
   bark(){
    console.log(`${name} is barking`)
  },
  wagTail() {
    console.log(`${name} is wagging their tail!`);
  },
}

const dog1 = createDog("Max", 4);
const dog2 = createDog("Sam", 2);
const dog3 = createDog("Joy", 6);
const dog4 = createDog("Spot", 8);
```
