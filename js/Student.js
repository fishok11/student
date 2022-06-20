// let students = [
//   {id: 1, name: "Вася", surname: "Иванов", speciality: "22.01", age: null,}, 
//   {id: 2, name: "Петя", surname: "Тузов", speciality: "22.01", age: 21,}, 
//   {id: 3, name: "Петя", surname: "Соболев", speciality: "22.01", age: 19},
// ]


class Student {
  constructor(student) {
    this.id = generateUUID();

    this.name = student.year;
    this.surname = student.surname;
    this.speciality = student.speciality;
    this.age = student.age;

  }

  update() {
  }

  delete() {
  }
}
