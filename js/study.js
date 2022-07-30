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

const Courses = {
    "1": "Математика",
    "2": "Физика",
    "3": "Программирование"
}
// ********************* main.js *********************
generateTable()


const selectAdd = document.querySelector(".select-speciality-add");

for (let key in Specs) {             
    let option = document.createElement("option");

    option.setAttribute("value", key);

    option.innerHTML = Specs[key]

    selectAdd.append(option);
}

const selectUpdate = document.querySelector(".select-speciality");
       
for (let key in Specs) {             
    let option = document.createElement("option");

    option.setAttribute("value", key);

    option.innerHTML = Specs[key]

    selectUpdate.append(option);
}


function generateTable() {
    let table = document.querySelector(".student")

    let thead = document.querySelector("thead")

    if (thead) {
        thead.remove()
    }

    thead = document.createElement("thead");

    thead.classList.add("student-head")

    table.append(thead)

    let tbody = document.querySelector("tbody")

    if (tbody) {
        tbody.remove()
    }

    tbody = document.createElement("tbody");

    tbody.classList.add("student-body")

    table.append(tbody)

    fetch("http://localhost:3000/students")
        .then(response => response.json())
        .then((data) => {
            let student = data[0]

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
            
            
        
            for (let student of data) {
                
                let tr = document.createElement("tr"); 

                for (let column in student) {
                    if (column !== "available") {
                        let td = document.createElement("td");

                        if (column === "speciality") {
                            td.innerHTML = Specs[student[column]]
                        } else if (column === "training") {
                            td.innerHTML = TypeOfTraining[student[column]]
                        } else
                            if (column === "courses") {           
                            const arr = student[column]       
                            td.innerHTML = arr.map(item => " " + Courses[item]);               
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
                    const oneStudent = data.find(student => studentId === student.id)
                    const form = document.querySelector("[name = 'formUpdate']")

                    form.id.value = oneStudent.id
                    form.name.value = oneStudent.name
                    form.surname.value = oneStudent.surname
                    selectUpdate.value = oneStudent.speciality
                    form.age.value = oneStudent.age
                    form.training.value = oneStudent.training
                    document.querySelectorAll(".input-checkbox-update").forEach(checkbox => {
                        checkbox.checked = false;
                    });
                    oneStudent.courses.forEach(course => {
                        document.getElementById(course + "-checkbox-update").checked = true;
                    });
                }

                tdButton.append(buttonUpdate); 

                tr.append(tdButton); 



                let buttonExpel = document.createElement("button"); 

                buttonExpel.classList.add("button-expel")

                buttonExpel.innerHTML = "Отчислить" 

                buttonExpel.onclick = async function() {
                    student = new Student({
                        id: student.id,
                    })

                    const response = await student.delete();

                    if (response) {
                        alert("Студент удален!");
                    } else {
                        alert("Ошибка!!!")
                    }
                }

                tdButton.append(buttonExpel); 

                tr.append(tdButton); 
                

                tbody.append(tr); 
            }
    });
}

document.querySelector(".button-add").addEventListener("click", function(e) {
    e.preventDefault()

    const form = document.querySelector("[name = 'formAdd']")

    const checkboxes = document.querySelectorAll('.input-checkbox-add:checked');
    const arr = [];
    checkboxes.forEach((checkbox) => {arr.push(checkbox.value)})
    
    const student = new Student({ 
        id:"",
        name: form.name.value, 
        surname: form.surname.value, 
        speciality: selectAdd.value, 
        age: form.age.value, 
        training: form.training.value,
        courses: arr,
    })

    async function studentCreate() {
        const response = await student.create();
           
        if (response) {
            alert("Студент добавлен!");
        } else {
            alert("Ошибка!!!")
        }
    }
    
    studentCreate()
});



document.querySelector(".button-save").addEventListener("click", function(e) {
    e.preventDefault()

    const form = document.querySelector("[name = 'formUpdate']")
    const studentId = form.id.value;

    const checkboxes = document.querySelectorAll('.input-checkbox-update:checked');
    const arr = [];
    checkboxes.forEach((checkbox) => {
        arr.push(checkbox.value)
    })

    const student = new Student({ 
        id: studentId,
        name: form.name.value, 
        surname: form.surname.value, 
        speciality: selectUpdate.value, 
        age: form.age.value, 
        training: form.training.value,
        courses: arr,
    })
    
    async function studentUpdate() {
        const response = await student.update();
           
        if (response) {
            alert("Студент изменен!");
        } else {
            alert("Ошибка!!!")
        }
    }
    
    studentUpdate()
});