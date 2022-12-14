// Use object destructuring when accessing and using multiple properties of an object. eslint: prefer-destructuring

// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

// Use array destructuring.
const arr = [1, 2, 3, 4];

// bad
const first1 = arr[0];
const second1 = arr[1];

// good
const [first, second] = arr;

