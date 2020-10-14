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

// Rest Operator
// When used in a function, the Rest operator allows us to pass several arguments when calling said function. The arguments will be stored in an array, therefore, we can manipulate with array methods such as filter
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3))