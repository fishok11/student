class Student {
    constructor(student) {
        this.id = generateUUID();
        this.available = true;  

        this.name = student.name;
        this.surname = student.surname;
        this.speciality = student.speciality;
        this.age = student.age;
        this.training  = student.training;
        this.courses = student.courses;
    }
  
    update(studentUpdate) {
        this.name = studentUpdate.name ?? this.name;
        this.surname = studentUpdate.surname ?? this.surname;
        this.speciality = studentUpdate.speciality ?? this.speciality;
        this.age = studentUpdate.age ?? this.age;
        this.training  = studentUpdate.training ?? this.training;
        this.courses  = studentUpdate.courses ?? this.courses;
    }

    expel() {
        this.available = false; 
    }

    isAvailable() {
        return this.available
    }
}