
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
document.getElementById("course__department").appendChild(document.createTextNode(course.department));
document.getElementById("teacher__name").appendChild(document.createTextNode(teacher.name));
document.getElementById("course__name").appendChild(document.createTextNode(course.name));
document.getElementById("course__code").appendChild(document.createTextNode(course.code));
document.getElementById("course__points").appendChild(document.createTextNode(course.points.toString())); 
document.getElementById("course__period").appendChild(document.createTextNode(course.period.toString()));
document.getElementById("course__slot").appendChild(document.createTextNode(course.slot));

// schedule link
var scheduleLink = document.createElement('a');
scheduleLink.setAttribute('href', 'schedule.html');
scheduleLink.appendChild(document.createTextNode("Schedule"));
document.getElementById("course__schedule").appendChild(scheduleLink);
