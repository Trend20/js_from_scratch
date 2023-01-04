/*
classes are a way of writing object blueprints in javascript

example
class Person{
  constructor(name){
    this.name = name;
  }
}

// create an instance of the class
const Mike = new Person('Bonvik');(inheritance)

// Getters and Setters
They are methods that can be used to manipulate or retrieve the properties of a class

EXAMPLE:

class Person{

  constructor(name){
    this.name = name
  }

  // getter
  getName(){
    return this.name;
  }

  // setter
  setName(newName){
    // trim() removes white spaces from both sides of the string name.
    newName = newName.trim();

    if(newName === ''){
      throw 'Name can not be empty'
    }
    this.name = newName
  }
}

ES6 provides specific syntax for defining the getter and setter using the get and set keywords. For example:

EXAMPLE:

class Person{

  constructor(name){
    this.name = name
  }

  // getter
  get name(){
    return this._name;
  }

  // setter
  set name(newName){
    // trim() removes white spaces from both sides of the string name.
    newName = newName.trim();

    if(newName === ''){
      throw 'Name can not be empty'
    }
    this._name = newName
  }
}
*/