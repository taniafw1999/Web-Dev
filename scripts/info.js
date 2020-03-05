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

// Header

// function to set multiple attributes
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
// find header element
const header        = document.getElementsByTagName("header")[0];

const div_inner     = document.createElement('div');
const div_inner_top = document.createElement('div');
const img_logo      = document.createElement("img");
const h2_title      = document.createElement("h2");
const h2_title_text = document.createTextNode("Webtechnology");

// set attributes 
setAttributes(img_logo,
    {
        "src": "images/1200px-Utrecht_University_logo.svg.png",
        "class": "header__logo--left",
        "alt": "UU_logo"
    });

div_inner.setAttribute('class', 'header__inner');

div_inner_top.setAttribute('class', 'header__inner--top');

h2_title.setAttribute('class', 'header__title');

// navigation 
const nav           = document.getElementsByClassName("header__inner--bottom")[0];
const ul_menu       = document.createElement("ul");

const sub_elem1 = document.createElement("li");
const sub_elem2 = document.createElement("li");
const sub_elem3 = document.createElement("li");
const sub_elem4 = document.createElement("li");
const sub_elem5 = document.createElement("li");

const menu_home                 = document.createElement("a");
const menu_home_text            = document.createTextNode('Home');

const menu_announcement         = document.createElement("a");
const menu_announcement_text    = document.createTextNode('Announcements');

const menu_schedule             = document.createElement("a");
const menu_schedule_text        = document.createTextNode('Schedule');

const menu_assignments          = document.createElement("a");
const menu_assignments_text     = document.createTextNode('Assignments & labs');

const menu_grading              = document.createElement("a");
const menu_grading_text         = document.createTextNode('Grading & grades');

sub_elem1.setAttribute('class', 'sub__elem');
sub_elem2.setAttribute('class', 'sub__elem');
sub_elem3.setAttribute('class', 'sub__elem');
sub_elem4.setAttribute('class', 'sub__elem');
sub_elem5.setAttribute('class', 'sub__elem');

ul_menu.setAttribute('class', 'header__subtitles');

menu_home.setAttribute('href', "home.html");
menu_home.appendChild(menu_home_text);

menu_announcement.setAttribute('href', "announcements.html");
menu_announcement.appendChild(menu_announcement_text);

menu_schedule.setAttribute('href', "schedule.html");
menu_schedule.appendChild(menu_schedule_text);

menu_assignments.setAttribute('href', "assignments.html");
menu_assignments.appendChild(menu_assignments_text);

menu_grading.setAttribute('href', "grading.html");
menu_grading.appendChild(menu_grading_text);

// render in DOM tree
header
    .appendChild(div_inner)
    .appendChild(div_inner_top)
    .appendChild(img_logo);
div_inner_top.appendChild(h2_title).appendChild(h2_title_text);

div_inner.appendChild(nav).appendChild(ul_menu).appendChild(sub_elem1).appendChild(menu_home)
div_inner.appendChild(nav).appendChild(ul_menu).appendChild(sub_elem2).appendChild(menu_announcement)
div_inner.appendChild(nav).appendChild(ul_menu).appendChild(sub_elem3).appendChild(menu_schedule)
div_inner.appendChild(nav).appendChild(ul_menu).appendChild(sub_elem4).appendChild(menu_assignments)
div_inner.appendChild(nav).appendChild(ul_menu).appendChild(sub_elem5).appendChild(menu_grading)

div_inner.insertBefore(div_inner_top, nav)
