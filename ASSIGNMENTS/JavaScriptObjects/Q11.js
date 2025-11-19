
class Student {
    constructor(studName, course) {
        this.studName = studName;
        this.course = course;
    }

 
    getDetails() {
        return `Student Name: ${this.studName}, Course: ${this.course}`;
    }
}


class GraduateStudent extends Student {
    constructor(studName, course, gpa) {
       
        super(studName, course);
        this.gpa = gpa;
    }

   
    getDetails() {
        const baseDetails = super.getDetails(); 
        return `${baseDetails}, GPA: ${this.gpa}`;
    }
}

const student1 = new Student("Alex Johnson", "B.Tech (CS)");
const gradStudent1 = new GraduateStudent("Maya Sharma", "M.Tech (AI)", 3.85);


console.log("\n--- Task 11: Student Details ---");
console.log(student1.getDetails()); 
console.log(gradStudent1.getDetails());