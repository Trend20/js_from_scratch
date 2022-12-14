// Use the literal syntax for array creation.

// bad
const items1 = new Array();

// good
const items2 = [];

// Use Array#push instead of direct assignment to add items to an array.
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');

// Use array spreads ... to copy arrays.
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}
// good
const itemsCopy1 = [...items];

// To convert an iterable object to an array, use spreads ... instead of Array.from.
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes1 = [...foo];

// Use Array.from for converting an array-like object to an array.
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr1 = Array.from(arrLike);

// Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.
// bad
const baz = [...foo].map(bar);

// good
const baz2 = Array.from(foo, bar);

// Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => x + 1);

// bad - no returned value means `acc` becomes undefined after the first iteration
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
});

// good
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
  const flatten = acc.concat(item);
  return flatten;
});

// bad
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  } else {
    return false;
  }
});

// good
inbox.filter((msg) => {
  const { subject, author } = msg;
  if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
  }

  return false;
});

// Use line breaks after open and before close array brackets if an array has multiple lines
// bad
const arr2 = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray1 = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray2 = [
  1, 2,
];

// good
const arr3 = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];