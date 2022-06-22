/*let students = ['Петя', 'Вася', 'Коля', 'Саша']

console.log(students)

students.push('Дима')

console.log(students)

students.push('Марат', 'Борис', 'Игорь', 'Виктор', 'Евгений')

console.log(students)

students = students.filter(function(name) { return name !== 'Виктор'})

console.log(students, students.length)

students = students.filter(function(name) { return name !== 'Евгений' && name !== 'Игорь'})

console.log(students, students.length)

let speciality = 'инженер'

let newSpeciality = 'программист'

// students.forEach(name => {
//     if (name === 'Вася' || name === 'Коля' || name === 'Дима') {
//         students = students.filter(function(name) { return name !== 'Вася' && name !== 'Коля' && name !== 'Дима'}) 
//         students.push(`${name}-${newSpeciality}`)
//     } else {
//         students = students.filter(function(name) { return name !== 'Петя' && name !== 'Саша' && name !== 'Марат' && name !== 'Борис'})
//         students.push(`${name}-${speciality}`)
//     } 
// });

function diffSpecialityStudents(name) {
    if (name === 'Вася' || name === 'Коля' || name === 'Дима') {
        return `${name}-${newSpeciality}`
    } else {
        return `${name}-${speciality}`
    }
}

students = students.map(diffSpecialityStudents)

console.log(students, students.length)*/

//==========================================================================================================================

/*let speciality = 'инженер'

let newSpeciality = 'программист'

let students = [
    {name: 'Петя', faculty: speciality},
    {name: 'Вася', faculty: speciality}, 
    {name: 'Коля', faculty: speciality},
    {name: 'Саша', faculty: speciality},
]

console.log(students)

students.push({name: 'Дима', faculty: speciality})

console.log(students)

students.push(
    {name: 'Марат', faculty: speciality}, 
    {name: 'Борис', faculty: speciality}, 
    {name: 'Игорь', faculty: speciality}, 
    {name: 'Виктор', faculty: speciality}, 
    {name: 'Евгений', faculty: speciality}
)

console.log(students)

students.push()

console.log(students)

students = students.filter(function(item) { return item.name !== 'Виктор'})

console.log(students)

students = students.filter(function(item) { return item.name !== 'Евгений' && item.name !== 'Игорь'})

console.log(students)

students = students.map(function (item){ 
    if (item.name === 'Вася' || item.name === 'Коля' || item.name === 'Дима') {
        return {name: item.name , faculty: newSpeciality}
    } else {
        return {...item, faculty: speciality}
    }
});

console.log(students)

students.push(
    {name: 'Сергей', faculty: speciality}, 
    {name: 'Генадий', faculty: speciality}, 
)

console.log(students)

students = students.map(function (item){ 
    if (item.name === 'Сергей') {
        return {name: item.name, faculty: newSpeciality}
    } else {
        return item
    }
});

console.log(students)

students = students.map(function (item){ 
    if (item.name === 'Генадий') {
        return {name: item.name, faculty: newSpeciality}
    } else {
        return item
    }
});

console.log(students)*/

//========================================================================================================================

/*
let arrNumber = [1, 2, 3, 4, 5] 

arrNumber = arrNumber.map(item => (item === 5) ? 0 : item)

const number = arrNumber.indexOf(5)

arrNumber[number] = 0

console.log(arrNumber)
*/

/*
let arrNumber = [1, 2, 3, 4, 5, 5, 5]

// for (let i = 0; i < arrNumber.length; i++) {
//     if (arrNumber[i] === 5) {
//       arrNumber[i] = 0;
//     } else {
//         arrNumber[i]
//     }
// }

console.log(arrNumber)

arrNumber.forEach(function(item, index, array) {
    if (item === 5) {
        array[index] = 0
    }
});

console.log(arrNumber)
*/

//================================================================================================



// ********************* database.js *********************

const Specs = {
    "22.01": "Инженер",
    "23.15": "Программист",
    "25.15": "Химик",
    "23.15": "Биолог",
}




// ********************* main.js *********************

let students = [];

students.push(
    new Student({name: "Вася", surname: "Иванов", speciality: "22.01", age: 18})
);
students.push(
    new Student({name: "Петя", surname: "Тузов", speciality: "23.15", age: 22})
);
students.push(
    new Student({name: "Петя", surname: "Соболев", speciality: "22.01", age: 20})
);
students.push(
    new Student({name: "Дима", surname: "Тугушев", speciality: "23.15", age: 19})
);
students.push(
    new Student({name: "Сева", surname: "Ладыгин", speciality: "25.15", age: 18})
);

console.log(students[0]);
students[0].update({age: 21})
console.log(students[0]);


/// задание.
/// вместо физического удаления студента (deleteStudent(1, students);) сделать у студента признак available (активный, учится) - boolean (true/false).
/// принимаем студента (new) - он сразу учится (available=true). Когда студента отчисляют - available=false
/// написать метод отчисления студента Student.expel() - применять students[1].expel()
/// и еще один метод Student.isAvailable(), который будет возвращать true если студент учится (не отчислен)
/// при выводе таблички не показывать отчисленных студентов, используя метод isAvailable()

/// это заменить на students[1].expel()
students[1].expel()
console.log(students);
console.log(students[1].isAvailable())

let thead = document.querySelector(".student-head");

let student = students[0]

let tr = document.createElement('tr'); 

    for (let key in student) {
        if (key !== "available") {
            let th = document.createElement('th');

            th.innerHTML = key
                
            tr.append(th); 
        }
    }

thead.append(tr); 


let tbody = document.querySelector(".student-body");

for (let student of students) {
    if (student.isAvailable() === true) {
        let tr = document.createElement('tr'); 

        for (let column in student) {
            if (column !== "available") {
                let td = document.createElement('td');
                
                if (column === "speciality") {
                    td.innerHTML = Specs[student[column]]
                } else {
                    td.innerHTML = student[column]
                }

                tr.append(td); 
            }
        }
        tbody.append(tr); 
    }
}


// ********************* api.js *********************

function deleteStudent(index, students) {
    students.splice(index, 1);
}
