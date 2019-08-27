// old

// function Person (name) {
//   this.name = name;
// }

// Person.prototype.bio = function () {
//   return `My name is ${this.name}`;
// };

// a = new Person()
// a.protoype.bio

// new

class Person {
  constructor (name) {
    this.name = name;
  }

  bio () {
    return `My name is ${this.name}`;
  }
}
