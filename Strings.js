// Use single quotes '' for strings. 
// bad
const name1 = "Capt. Janeway";

// bad - template literals should contain interpolation or newlines
const name2 = `Capt. Janeway`;

// good
const name3 = 'Capt. Janeway';


// Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.
// Why? Broken strings are painful to work with and make code less searchable.
// bad
const errorMessage1 = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage2 = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage3 = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';



// When programmatically building up strings, use template strings instead of concatenation. eslint: prefer-template template-curly-spacing

//     Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}

// Never use eval() on a string, it opens too many vulnerabilities.

// Do not unnecessarily escape characters in strings.
// bad
const foo1 = '\'this\' \i\s \"quoted\"';

// good
const foo2 = '\'this\' is "quoted"';
const foo3 = `my name is '${name}'`;