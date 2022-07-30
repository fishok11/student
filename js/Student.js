class Student {
    constructor(student) {
        this.id = student.id;
        this.name = student.name;
        this.surname = student.surname;
        this.speciality = student.speciality;
        this.age = student.age;
        this.training  = student.training;
        this.courses = student.courses;
    }
  
    async create() {
        const response = await fetch('http://localhost:3000/students', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this)
        })
        
        if (response.status < 300) {
            return true
        } else if (response.status >= 300) {
            return false
        }
    }

    async update() {
        const response = await fetch('http://localhost:3000/students/' + this.id, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(this)
        })

        if (response.status < 300) {
            return true
        } else if (response.status >= 300) {
            return false
        }
    }

    async delete() {
        const response = await fetch( `http://localhost:3000/students/` + this.id, {
            method: 'DELETE',
        })

        if (response.status < 300) {
            return true
        } else if (response.status >= 300) {
            return false
        }
    }
}