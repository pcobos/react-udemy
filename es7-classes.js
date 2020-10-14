// Next-gen JS offers a different syntax that will be used in this course

class Human {
  // ES7 doesn't require the constructor function
  gender = "Male";

  // ES7 uses arrow function syntax, the advantage being that it avoids problems with the "this" keyword
  printGender = () => {
    console.log(this.gender)
  }
}

// Created a new class - Notice that in order for a class to inherit from another, we have to use the "extends" keyword followed by the Parent Class
class Person extends Human {
  // Constructor method with properties
    // Also, if we are using the constructor method, we must call the super constructor in the child class in order to access the parent class properties and methods
    name = "Petra";
    gender = "Female"; // Notice that we can add the same property as the one on the Parent class and it will take precedence when calling the associated method (printGender in this case)
  
  // Method to add behaviour
  printName = () => {
    console.log(this.name)
  }
}

// Instanciating a new object of the Person class
const person = new Person();

// Calling the method inside the class Person
person.printName();
person.printGender();