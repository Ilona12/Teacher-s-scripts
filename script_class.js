var Person = function (firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;

  this.greet = function () {
    return [
      'Hello, I am',
      this.firstName,
      this.lastName,
      '.My email address is:',
      this.email
    ].join(' ');
  };
};

var Student = function (firstName, lastName, email, teacher) {
  Person.apply(this, arguments);

  this.teacher = teacher;

  this.setTeacher = function (teacher) {
    this.teacher = teacher;
  }
};

var Teacher = function (firstName, lastName, email, students) {
  Person.apply(this, arguments);

  this.students = students || [];

  this.inviteStudent = function (student) {
    this.students.push(student);
  };
};

var student = new Student('John', 'Doe', 'test@gmail.com', 'Someone');
var teacher = new Teacher('Ivan', 'Ivanov', 'ivan@gmail.com', [student]);

student.setTeacher(teacher);