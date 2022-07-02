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
    "1": "Инженер",
    "2": "Программист",
    "3": "Химик",
    "4": "Биолог",
}

const TypeOfTraining = {
    "1": "Очно",
    "2": "Заочно",
}


// ********************* main.js *********************

let students = [];

students.push(
    new Student({name: "Вася", surname: "Иванов", speciality: "1", age: 18, training: "1"})
);
students.push(
    new Student({name: "Петя", surname: "Тузов", speciality: "2", age: 22, training: "2"})
);
students.push(
    new Student({name: "Петя", surname: "Соболев", speciality: "1", age: 20, training: "2"})
);
students.push(
    new Student({name: "Дима", surname: "Тугушев", speciality: "3", age: 19, training: "1"})
);
students.push(
    new Student({name: "Сева", surname: "Ладыгин", speciality: "4", age: 18, training: "2"})
);


generateTable(students)



let selectAdd = document.querySelector(".select-speciality-add");

for (let key in Specs) {             
    let option = document.createElement("option");

    option.setAttribute("value", key);

    option.innerHTML = Specs[key]

    selectAdd.append(option);
}

let selectUpdate = document.querySelector(".select-speciality");
       
for (let key in Specs) {             
    let option = document.createElement("option");

    option.setAttribute("value", key);

    option.innerHTML = Specs[key]

    selectUpdate.append(option);
}


let formAdd = document.querySelector("[name = 'formAdd']")

for (let key in TypeOfTraining) {
    let inputRadio = document.querySelector(".input-radio-add");

    let labelRadio = document.querySelector(".label-radio-add");

    inputRadio.setAttribute("value", key);

    inputRadio.setAttribute("name", "training");

    labelRadio.innerHTML = TypeOfTraining[key]

    formAdd.append(inputRadio);

    formAdd.append(labelRadio);
}

let formUpdate = document.querySelector("[name = 'formUpdate']")

for (let key in TypeOfTraining) {
    let inputRadio = document.querySelector(".input-radio-update");

    let labelRadio = document.querySelector(".label-radio-update");

    inputRadio.setAttribute("value", key);

    inputRadio.setAttribute("name", "training");

    labelRadio.innerHTML = TypeOfTraining[key]

    formUpdate.append(inputRadio);

    formUpdate.append(labelRadio);
}



function generateTable(students) {
    let table = document.querySelector(".student")

    let thead = document.querySelector("thead")

    if (thead) {
        thead.remove()
    }

    thead = document.createElement("thead");

    thead.classList.add("student-head")

    table.append(thead)



    let student = students[0]

    let tr = document.createElement("tr"); 

        for (let key in student) {
            if (key !== "available") {
                let th = document.createElement("th");

                th.innerHTML = key
   
                tr.append(th); 
            }
        }

    let thButton = document.createElement("th");
    
    thButton.innerHTML = "update/expel"

    tr.append(thButton); 

    thead.append(tr); 



    let tbody = document.querySelector("tbody")

        if (tbody) {
            tbody.remove()
        }

    tbody = document.createElement("tbody");

    tbody.classList.add("student-body")

    table.append(tbody)
    


    for (let student of students) {
        if (student.isAvailable() === true) {
            let tr = document.createElement("tr"); 

            for (let column in student) {
                if (column !== "available") {
                    let td = document.createElement("td");

                    if (column === "speciality") {
                        td.innerHTML = Specs[student[column]]
                    } else if (column === "training") {
                        td.innerHTML = TypeOfTraining[student[column]]
                    } else {
                        td.innerHTML = student[column] 
                    }


                    tr.append(td); 
                }
            }



            let buttonUpdate = document.createElement("button"); 

            let tdButton = document.createElement("td"); 

            buttonUpdate.classList.add("button-update")

            buttonUpdate.innerHTML = "Изменить"

            buttonUpdate.onclick = function() {
                const studentId = student.id;
                const oneStudent = students.find(student => studentId === student.id)
                const form = document.querySelector("[name = 'formUpdate']")
                form.id.value = oneStudent.id
                form.name.value = oneStudent.name
                form.surname.value = oneStudent.surname
                selectUpdate.value = oneStudent.speciality
                form.age.value = oneStudent.age
                form.training.value = oneStudent.training
            }

            tdButton.append(buttonUpdate); 

            tr.append(tdButton); 



            let buttonExpel = document.createElement("button"); 

            buttonExpel.classList.add("button-expel")

            buttonExpel.innerHTML = "Отчислить" 

            buttonExpel.onclick = function() {
                const studentId = student.id;
                students.find(student => studentId === student.id).expel()
                generateTable(students)
            }

            tdButton.append(buttonExpel); 

            tr.append(tdButton); 



            tbody.append(tr); 
        }
    }
}

document.querySelector(".button-add").addEventListener("click", function(e) {
    e.preventDefault()

    const form = document.querySelector("[name = 'formAdd']")

    students.push(
        new Student({ 
            name: form.name.value, 
            surname: form.surname.value, 
            speciality: selectAdd.value, 
            age: form.age.value, training: 
            form.training.value 
        })
    );

    generateTable(students)
});

document.querySelector(".button-save").addEventListener("click", function(e) {
    e.preventDefault()

    const form = document.querySelector("[name = 'formUpdate']")

    const studentId = form.id.value;

    students.find(student => studentId === student.id).update({     
        name: form.name.value,
        surname: form.surname.value,
        speciality: selectUpdate.value,
        age: form.age.value,
        training: form.training.value 
    });

    generateTable(students)
});