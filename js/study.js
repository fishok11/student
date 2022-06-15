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
    "40.21": "Биолог",
}

let students = [
    {id: 1, name: "Вася", surname: "Иванов", speciality: Specs["22.01"], age: 18}, 
    {id: 2, name: "Петя", surname: "Тузов", speciality: Specs["22.01"], age: 21}, 
    {id: 3, name: "Петя", surname: "Соболев", speciality: Specs["22.01"], age: 19},
]



// ********************* main.js *********************


// задание

// В новом учебном году название специальности 22.01 меняется с Инженер на Инженер-системотехник.

// Перед началом первого семестра пришла секретарша и поменяла название специальности в базе данных:
Specs["22.01"] = "Инженер-системотехник";

// Нужно, чтобы во всех отчетах ниже название специальности поменялось тоже.

// Подсказка: мы неправильно храним специальности в базе данных студентов (students) - мы почему-то по прежнему храним название специальности,
// а надо хранить ее код - в этом смысл мапов. Код специальности (key) никогда не меняется. Название (value) - меняется как угодно.

// /задание






console.log(students)

outputArray()

addStudent({name: 'Дима', surname: 'Смирнов', speciality: Specs["23.15"], age: 20})

updateStudent(3, {spec: Specs["40.21"], age: 21})

console.log(students)

outputArray()

addStudent({name: 'Саша', surname: 'Петров', speciality: Specs["23.15"], age: 19})

console.log(students)

outputArray()

deleteStudent(3)

console.log(students)

outputArray()


let thead = document.querySelector(".student-head");

let student = students[0]

let tr = document.createElement('tr'); 

    for (let key in student) {
        let th = document.createElement('th');

        th.innerHTML = key
            
        tr.append(th); 
    }

thead.append(tr); 


let tbody = document.querySelector(".student-body");

for (let student of students) {
	let tr = document.createElement('tr'); 
	
        for (let column in student) {
            let td = document.createElement('td');

            td.innerHTML = student[column]
            
            tr.append(td); 
        }
	
	tbody.append(tr); 
}



// ********************* api.js *********************

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


// ********************* utils.js *********************

function outputArray() {
    console.log("--- список студентов ---")
    for (let item of students) {
        console.log(`${item.id}-${item.name}-${item.surname}-${item.speciality}-${item.age}`)
    }
}
