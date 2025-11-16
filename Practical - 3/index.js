class Student {
  constructor(name, roll, marks) {
    this.name = name;
    this.roll = roll;
    this.marks = marks;
  }

  isPassed() {
    return this.marks >= 40;
  }
}

const students = [];

const nameInput = document.querySelector("#name");
const rollInput = document.querySelector("#roll");
const marksInput = document.querySelector("#marks");

const allBox = document.querySelector("#allStudents");
const passBox = document.querySelector("#passedStudents");
const failBox = document.querySelector("#failedStudents");

function renderList(element, list, emptyMessage) {
  element.innerHTML =
    list.length === 0
      ? emptyMessage
      : list
          .map(({ roll, name, marks }) => `[${roll}] ${name} : ${marks}`)
          .join("<br>");
}

function addStudent() {
  const name = nameInput.value.trim();
  const roll = rollInput.value.trim();
  const marks = Number(marksInput.value);

  if (!name || !roll || isNaN(marks)) {
    alert("Please fill all fields correctly!");
    return;
  }

  students.push(new Student(name, roll, marks));

  nameInput.value = "";
  rollInput.value = "";
  marksInput.value = "";

  renderList(allBox, students, "No students added yet.");
}

function showPassedStudents() {
  const passed = students.filter((s) => s.isPassed());
  renderList(passBox, passed, "No passed students.");
}

function showFailedStudents() {
  const failed = students.filter((s) => !s.isPassed());
  renderList(failBox, failed, "No failed students.");
}
