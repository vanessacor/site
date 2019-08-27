// old

// function Teacher (name, subject) {
//   Person.call(this, name);

//   this.subject = subject;
// }

// Teacher.protoype.bio = function () {
//   const greeting = Person.prototype.bio.call(this);
//   return `${greeting} and I teach ${this.subject}`;
// };

// new

class Teacher extends Person {
  constructor (name, subject) {
    super(name);

    this.subject = subject;
    this.anotherProperty = 'foo';
  }

  bio () {
    const greeting = super.bio();
    return `${greeting} and I teach ${this.subject}`;
  }

  anotherMethod () {

  }
}

// a = new Teacher()
// { subject: '', name: '', bio: f}
