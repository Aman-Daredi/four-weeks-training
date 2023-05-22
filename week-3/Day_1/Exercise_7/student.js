let student1 = {
    Name: "Aman",
    Grade: 12,
    Courses: ["Science", "English", "Physics"],

    addCourse(course) {
        this.Courses.push(course);
    },

    removeCourse(course) {
        if(this.Courses.includes(course)) {
            let idx = this.Courses.indexOf(course);
            this.Courses.splice(idx, 1);
        }
    }
}

// student.addCourse("History");
// student.removeCourse("Science");
// console.log(student);


let student2 = {
    Name: "Rahul",
    Grade: 11,
    Courses: ["Science", "Maths", "English"],

    addCourse(course) {
        this.Courses.push(course);
    },

    removeCourse(course) {
        if(this.Courses.includes(course)) {
            let idx = this.Courses.indexOf(course);
            this.Courses.splice(idx, 1);
        }
    }
}

let student3 = {
    Name: "Ekta",
    Grade: 10,
    Courses: ["Science", "Maths", "Physics"],

    addCourse(course) {
        this.Courses.push(course);
    },

    removeCourse(course) {
        if(this.Courses.includes(course)) {
            let idx = this.Courses.indexOf(course);
            this.Courses.splice(idx, 1);
        }
    }
}

function hasCourse(array, course) {
    let result = []
    array.forEach(student => {
        if(student.Courses.includes(course)) result.push(student);
    })
    return result;
}

let array = [student1, student2, student3];

console.log(hasCourse(array, "Science"));