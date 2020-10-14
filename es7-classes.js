class Human {
  constructor() {
    this.gender = "Male"
  }

  printGender() {
    console.log(this.gender)
  }
}

// Created a new class - Notice that in order for a class to inherit from another, we have to use the "extends" keyword followed by the Parent Class
class Person extends Human {
  // Constructor method with properties
  constructor() {
    // Also, if we are using the constructor method, we must call the super constructor in the child class in order to access the parent class properties and methods
    super();
    this.name = "Petra"
    this.gender = "Female" // Notice that we can add the same property as the one on the Parent class and it will take precedence when calling the associated method (printGender in this case)
  }
  
  // Method to add behaviour
  printName() {
    console.log(this.name)
  }
}

// Instanciating a new object of the Person class
const person = new Person();

// Calling the method inside the class Person
person.printName();
person.printGender();