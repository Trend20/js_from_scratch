function displayTypes(){
  // Primitive types: When you access a primitive type you work directly on its value.
const primitiveTypes = ['string', 'numbers', 'undefined', 'null', 'boolean'];
console.log(primitiveTypes);

// Complex types: When you access a complex type you work on a reference to its value.
const complexTypes = ['object', 'array', 'function'];
console.log(complexTypes);
}

displayTypes(readline());