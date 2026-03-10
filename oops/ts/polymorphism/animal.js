class Animal {
  makeSound() {
    console.log("Animal makes a noise.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!"); // Overrides the parent method
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow! Meow!"); // Overrides the parent method
  }
}

class Horse extends Animal {} // only have the prototype chainging 

const animals = [new Animal(), new Dog(), new Cat(), new Horse()];

// The same method call (makeSound()) produces different outputs 
// depending on the specific object type at runtime.
animals.forEach(animal => {
  animal.makeSound();
  // method 'makeSound' changes forms, depending on what is on left of '.' is? 
  // ie, animal. ! so this is Polymorphic
});
