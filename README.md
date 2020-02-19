Description
Develop a dynamic version of the website created in Assignment 1 using JavaScript (if necessary, you can change/extend the main theme). Use DOM methods, elements and events to interactively modify the content and appearance of your web-pages according to user actions. Use event listeners to process the events. Implement at least 1 case of event propagation (W3C model).

Create an info.html page whose main content is constructed purely through DOM manipulation (not document.write(), not .innerHTML). In other words, such elements as `<nav>`, ` <header>`, `<footer>` and `<aside>` can still be a part of the file info.html, but all the actual content of the page has to be produced by JavaScript on the fly when the page is loaded. 

The content of this page should represent a structured description of your course (title, code, teacher, department, number of credits, academic period, etc.). Look at any course description at http://www.cs.uu.nl/education/ or any other course catalogue  for inspiration.

Representation of this description in your JavaScript code should be an object of the class Course. Entries of this description should be the properties of the Course object (title, code, teacher,.. etc.). The overall class model you create should have at least 3 classes and at least 1 case of inheritance (`extends`) (can be more), meaning you need to define more than a Class Course, other entities should be defined as Classes as well. Links should be provided to browse from a particular property to a relevant webpage within your website or outside of it (for example, the name of the teacher in the description can be linked to a page presenting more information about the teacher). 

Use ES6 classes and ES6-style object construction.

Implement two menus in your `<header>` or `<footer>` that allow the user to dynamically change the appearance  of elements on a page. One menu should be used to select an element, another to modify the selected element appearance. The options of the first menu should  contain body, header, footer, aside, articles and sections (do not go deeper in the DOM hierarchy). They should be created on the fly by traversing the DOM of the page. In other words, a page can have more than one article and more than one section, and not necessarily have aside, but the menu should be able to read them correctly from the DOM of the page. The option of the second menu should allow to change at least the font size and the color scheme of the element.

To implement menus you can use the HTML Select element. These pages explain how you can create and manipulate the Select element and its properties:
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select

- https://www.w3schools.com/jsref/dom_obj_select.asp

The website should continue following the principles of responsive design and accessibility.

Do not use external libraries and frameworks. 

Maintain good coding style
In addition to the good coding style rules specified in Assignment 1:

separate scripting from the content 
use camelCase notation when naming your methods, variables and classes
use indentation when writing your JavaScript code
use meaningful comments
terminate JavaScript statements with a ";"

Procedure
complete and submit your website in groups (a group must be registered with the Teaching Assistant beforehand)
the website should be archived and submitted as a single zip through the BlackBoard system

Academic integrity
The work should be done by you and your peers only. You can rely on the support of teaching assistants and student assistants during practicums, but you are not allowed to use the code of other groups. It is forbidden to use HTML generating services and programs. If you decide using TypeScript, make sure the resulting JavaScript follows the requirements specified above. You can use external sources for the content of your website, however, you must refer to them by linking and naming them.