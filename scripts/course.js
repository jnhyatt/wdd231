const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const filterAll = document.querySelector("#filter-all");
const filterCSE = document.querySelector("#filter-cse");
const filterWDD = document.querySelector("#filter-wdd");
const courseList = document.querySelector("#certificates-grid");
const creditCount = document.querySelector("#credit-count");
const courseDetails = document.querySelector("#course-details");

filterAll.addEventListener("click", () => {
    courseList.innerHTML = "";
    updateCourseList(courses, _ => true);
});

filterCSE.addEventListener("click", () => {
    courseList.innerHTML = "";
    updateCourseList(courses, course => course.subject === "CSE");
});

filterWDD.addEventListener("click", () => {
    courseList.innerHTML = "";
    updateCourseList(courses, course => course.subject === "WDD");
});

updateCourseList(courses, _ => true);

function createCourseCard(course) {
    const courseCard = document.createElement("div");
    courseCard.classList.add("certificate-card");
    if (course.completed) {
        courseCard.classList.add("completed");
    }

    const courseName = document.createElement("p");
    const checkmark = course.completed ? "✔️" : "";
    courseName.textContent = `${course.subject} ${course.number} ${checkmark}`;
    courseCard.appendChild(courseName);

    courseCard.addEventListener("click", () => {
        fillModal(course);
        courseDetails.showModal();
    });

    return courseCard;
}

function updateCourseList(courses, courseFilter) {
    const filteredCourses = courses.filter(courseFilter);
    filteredCourses.forEach(course => {
        courseList.appendChild(createCourseCard(course));
    });
    creditCount.textContent = filteredCourses
        .filter(course => course.completed)
        .reduce((total, course) => total + course.credits, 0);
}

function fillModal(course) {
    courseDetails.querySelector(".close").addEventListener("click", () => {
        courseDetails.close();
    });
    courseDetails.querySelector(".title").textContent = `${course.subject} ${course.number} - ${course.title}`;
    courseDetails.querySelector(".description").textContent = course.description;
    courseDetails.querySelector(".credits").textContent = course.credits;
    courseDetails.querySelector(".certificate").textContent = course.certificate;
    courseDetails.querySelector(".technologies").textContent = course.technology.join(", ");
}
