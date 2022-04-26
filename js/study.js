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

const Specs = {
    "22.01": "Инженер",
    "23.15": "Программист",
    "25.15": "Химик",
    "40.21": "Биолог",
}

let students = [
    {id: 1, name: "Вася", surname: "Иванов", spec: Specs["22.01"], age: 18}, 
    {id: 2, name: "Петя", surname: "Тузов", spec: Specs["22.01"], age: 21}, 
    {id: 3, name: "Петя", surname: "Соболев", spec: Specs["22.01"], age: 19},
]


function addStudent(student) {
    let maxId = students[0].id;

    for(let i = 0; i < students.length; i++){
        if (maxId < students[i].id) {
          maxId = students[i].id 
        }
    }

    students.push(
        {
            id: maxId + 1,
            ...student,
        }
    )
}

function updateStudent(id, student) {
    
    for (let i = 0; i < students.length; i++) {
        const item = students[i];

        if (item.id === id) {
            students[i] = {
                ...item,
                ...student,
            }
        }
    }
}

function deleteStudent(id) {
    students = students.filter(function(student) { return student.id !== id })
}


function outputArray() {
    for (let item of students) {
        console.log(`${item.id}-${item.name}-${item.surname}-${item.spec}-${item.age}`)
    }
}

console.log(students)

outputArray()

addStudent({name: 'Дима', surname: 'Смирнов', spec: Specs["23.15"], age: 20})

updateStudent(3, {spec: Specs["40.21"], age: 21})

console.log(students)

outputArray()

addStudent({name: 'Вася', surname: 'Петров', spec: Specs["23.15"], age: 19})

console.log(students)

outputArray()

deleteStudent(3)

console.log(students)

outputArray()