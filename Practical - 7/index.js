import fs from "fs";

fs.readFile("students.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error: ", err);
    return;
  }

  const students = JSON.parse(data);

  console.log("\nStudents Information:");

  students.forEach((student) => {
    console.log(`\nName: ${student.name}`);
    console.log(`Roll No.: ${student.roll}`);
    console.log(`Marks: ${student.mark}`);
  });
});
