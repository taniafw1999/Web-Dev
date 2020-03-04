import "./main.js"
class Named {
    constructor(name) {
        this.name = name;
    }
}

class Teacher extends Named {
    constructor(name) {
        super(name);
    }
}

const teacher = new Teacher(
    "Sergey Sosnovsky"
)

class Course extends Named {
    constructor(name, code, points, period, slot, teacher) {
        super(name);
      this.code = code;
      this.points = points;
      this.period = period;
      this.slot = slot;
      this.teacher = teacher;
    }
}

const course = new Course(
      "INFOB2WT"
    , 7.5
    , 3
    , "D"
    , teacher
)



// fill page
document.getElementById("teacher__name").innerHTML = teacher.name;
document.getElementById("course__name").innerHTML = course.name;
document.getElementById("test").innerHTML = "test succeeded";
