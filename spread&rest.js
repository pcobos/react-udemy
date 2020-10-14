// Spread operator for arrays (...)
// similar to push(), but instead, we copy the elements of an existing array into a new one.
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5];
console.log(newNumbers);

// Spread operator for objects (...)
// Basically, we are copying the properties of an existing object into another one
const person = {
  name: "Pedro"
};

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson);