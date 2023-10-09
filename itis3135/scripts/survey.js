document.addEventListener("DOMContentLoaded", function () {
    const introForm = document.getElementById("introForm");
    const addCourseButton = document.getElementById("addCourse");
    const coursesContainer = document.getElementById("coursesContainer");
    const submittedContent = document.getElementById("submittedContent");

    introForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!isFormValid()) {
            alert("Please fill out all required fields.");
        } else {
            displaySubmittedContent();
        }
    });

    introForm.addEventListener("reset", function () {
        clearCourses();
        submittedContent.innerHTML = "";
    });

    addCourseButton.addEventListener("click", function () {
        createCourseInput();
    });

    coursesContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteCourse")) {
            event.target.parentElement.remove();
        }
    });

    function isFormValid() {
        return introForm.checkValidity();
    }

    function createCourseInput() {
        const courseInput = document.createElement("input");
        courseInput.type = "text";
        courseInput.name = "courses";
        courseInput.placeholder = "Course Name";
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.classList.add("deleteCourse");
        deleteButton.textContent = "Delete";

        const courseContainer = document.createElement("div");
        courseContainer.appendChild(courseInput);
        courseContainer.appendChild(deleteButton);
        coursesContainer.appendChild(courseContainer);
    }
    function clearCourses() {
        const courseInputs = document.getElementsByName("courses");
        courseInputs.forEach(function (courseInput) {
            courseInput.parentElement.remove();
        });
    }

    function displaySubmittedContent() {
        const submittedContentHTML = `
            <h3>Submitted Information:</h3>
            <p><strong>Name:</strong> ${introForm.name.value}</p>
            <p><strong>Mascot:</strong> ${introForm.mascot.value}</p>
            <p><strong>Image Caption:</strong> ${introForm.imageCaption.value}</p>
            <p><strong>Personal Background:</strong> ${introForm.personalBackground.value}</p>
            <p><strong>Professional Background:</strong> ${introForm.professionalBackground.value}</p>
            <p><strong>Academic Background:</strong> ${introForm.academicBackground.value}</p>
            <p><strong>Background in Web Development:</strong> ${introForm.webDevelopmentBackground.value}</p>
            <p><strong>Primary Computer Platform:</strong> ${introForm.computerPlatform.value}</p>
            <p><strong>Courses Currently Taking:</strong></p>
            <ul>
                ${getSubmittedCourses()}
            </ul>
            <p><strong>Funny Thing?</strong> ${introForm.funnyThing.value}</p>
            <p><strong>Anything else?</strong> ${introForm.additionalInfo.value}</p>
        </div>
        `;
        submittedContent.innerHTML = submittedContentHTML;
    }

    function getSubmittedCourses() {
        const courseInputs = document.getElementsByName("courses");
        const courseList = [];
        courseInputs.forEach(function (courseInput) {
            const courseName = courseInput.value.trim();
            if (courseName !== "") {
                courseList.push(`<li>${courseName}</li>`);
            }
        });
        return courseList.join("");
    }
});