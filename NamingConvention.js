// Avoid single letter names. Be descriptive with your naming.
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}


// Use camelCase when naming objects, functions, and instances.
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}

// Use PascalCase only when naming constructors or classes. 
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});