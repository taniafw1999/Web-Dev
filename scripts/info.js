
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
    constructor(name, department, code, points, period, slot, teacher) {
        super(name);
        this.department = department;
        this.code = code;
        this.points = points;
        this.period = period;
        this.slot = slot;
        this.teacher = teacher;
    }
}

const course = new Course(
      "Webtechnology"
    , "Information and Computing Sciences"
    , "INFOB2WT"
    , 7.5
    , 3
    , "D"
    , teacher
)



// fill page
document.getElementById("course__department").innerHTML = course.department;
document.getElementById("teacher__name").innerHTML = course.teacher.name;
document.getElementById("course__name").innerHTML = course.name;
document.getElementById("course__code").innerHTML = course.code;
document.getElementById("course__points").innerHTML = course.points.toString();
document.getElementById("course__period").innerHTML = course.period.toString();
document.getElementById("course__slot").innerHTML = course.slot;
document.getElementById("course__schedule").innerHTML = "<a href=\"schedule.html\">Schedule</a>";
document.getElementById("test").innerHTML = "test succeeded";
