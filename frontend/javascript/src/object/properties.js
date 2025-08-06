let student = {
    firstName: "John",
    lastName: "Doe",
    id: 202400720, 

    fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const { firstName, lastName, id } = student;
console.log(student);
console.log(student.fullName());