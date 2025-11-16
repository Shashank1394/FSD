function Courses() {
  const courses = [
    { name: "B.Sc Computer Science", duration: "3 years" },
    { name: "BBA", duration: "3 years" },
    { name: "MCA", duration: "2 years" },
  ];

  return (
    <section className="courses">
      <h2>Our Courses</h2>
      <ul>
        {courses.map((course, i) => (
          <li key={i}>
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Courses;
