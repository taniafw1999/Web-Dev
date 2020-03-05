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
    constructor(name, university, department, code, points, period, slot, teacher) {
        super(name);
        this.school = university;
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
    , "Utrecht University"
    , "Information and Computing Sciences"
    , "INFOB2WT"
    , 7.5
    , 3
    , "D"
    , teacher
)


// Body
const body = document.getElementsByTagName('body')[0];

// Header

// find header element
const header        = document.getElementsByTagName("header")[0];

const div_inner     = document.createElement('div');
const div_inner_top = document.createElement('div');
const img_logo      = document.createElement("img");
const h2_title      = document.createElement("h2");
const h2_title_text = document.createTextNode(course.name);

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

// content (articles and sections)

const article = document.createElement('article');
const button = document.createElement('button');
const button_text = document.createTextNode("Switch theme");

article.setAttribute('class', 'content');
button.addEventListener('click', switchTheme); 

// footer
const footer     = document.getElementsByTagName('footer')[0];
const footer_div = document.createElement('div');

footer_div.setAttribute('class', 'footer__inner');
footer_div.appendChild(document.createTextNode("Disclaimer: All page content is referenced from the course syllabus of " + course.name + " (" + course.code + ") " + " | " + course.school + " 2020"));
footer.appendChild(footer_div);

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

// fill page

// title
const article_div = document.createElement('div');
article_div.setAttribute('class','title__h2');
article.appendChild(article_div);

const h2 = document.createElement('h2');
article_div.appendChild(h2);
h2.appendChild(document.createTextNode(course.name))

// section
const section = document.createElement('section');
section.setAttribute('class', 'content__para');
article.appendChild(section);
var ul = document.createElement('ul')
section.appendChild(ul);
var courseData = [course.department,course.code,teacher.name,course.points,course.period,course.slot];

for (var index in courseData) {
    newListElem(document.createTextNode(courseData[index].toString()), ul);
}

//section.appendChild(document.createTextNode(course.department));
//section.appendChild(document.createTextNode(teacher.name));
//section.appendChild(document.createTextNode(course.name));
//section.appendChild(document.createTextNode(course.code));
//section.appendChild(document.createTextNode(course.points.toString())); 
//section.appendChild(document.createTextNode(course.period.toString()));
//section.appendChild(document.createTextNode(course.slot));

// schedule link
var scheduleLink = document.createElement('a');
scheduleLink.setAttribute('href', 'schedule.html');
scheduleLink.appendChild(document.createTextNode("Schedule"));
newListElem(scheduleLink, ul);


body.appendChild(article).appendChild(button).appendChild(button_text);

div_inner.insertBefore(div_inner_top, nav)
body.insertBefore(header, article);

body.appendChild(footer);

// functions

function newListElem(el, ul) {
    var li = document.createElement('li');
    ul.appendChild(li);
    li.appendChild(el);
}

// set multiple attributes
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

// switch themes (dark & light)
function switchTheme() {

    const body              = document.getElementsByTagName("body");
    const article           = document.getElementsByTagName("article");
    const content__para     = document.getElementsByClassName("content__para");
    const header__subtitles = document.getElementsByClassName("header__subtitles");
    const anchors           = document.getElementsByTagName("a");
    const anchor__menu      = document.getElementsByClassName("menu");

    if (body[0].style.cssText === "") {
        Array.from(body)
            .map(body => body.style.backgroundColor = "#2c2a38");

        Array.from(article)
            .map(article => article.style.color = "#d7d5e0");

        Array.from(content__para)
            .map(content__para => content__para.style.backgroundColor = "#767294");

        Array.from(header__subtitles)
            .map(header__subtitle => header__subtitle.style.backgroundColor = "#767294");

        Array.from(anchors)
            .map(a => a.style.color = "#8c98ed");

        Array.from(anchor__menu)
            .map(m => m.style.color = "black") 
    }
    else {
        location.reload()
    }
}