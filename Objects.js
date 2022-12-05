// Use the literal syntax for object creation.

// bad
const item1 = new Object();

// good
const item2 = {};


// Use computed property names when creating objects with dynamic property names.
// Why? They allow you to define all the properties of an object in one place.

function getKey(k) {
  return `a key named ${k}`;
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};


// Use object method shorthand
// bad
const atom1 = {
  value: 1,
  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom2 = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  },
};


// Use property value shorthand
// Why? It is shorter and descriptive.
const lukeSkywalker1 = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};


// Group your shorthand properties at the beginning of your object declaration.
// Why? It’s easier to tell which properties are using the shorthand.
const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};


// Only quote properties that are invalid identifiers. eslint: quote-props
// Why? In general we consider it subjectively easier to read. 
// It improves syntax highlighting, and is also more easily optimized by many JS engines.
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};



/*
Do not call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf. eslint: no-prototype-builtins
Why? These methods may be shadowed by properties on the object in question - consider { hasOwnProperty: false } - or, the object may be a null object (Object.create(null)).
*/
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));


/*
Prefer the object spread operator over Object.assign to shallow-copy objects. Use the object rest 
operator to get a new object with certain properties omitted. eslint: prefer-object-spread 
*/
// very bad
const original1 = { a: 1, b: 2 };
const copy1 = Object.assign(original1, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy1.a; // so does this

// bad
const original2 = { a: 1, b: 2 };
const copy2 = Object.assign({}, original2, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
