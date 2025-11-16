const Courses = () => {
  const courses = [
    {
      name: "B.Sc Computer Science",
      duration: "3 years",
    },
    {
      name: "MCA",
      duration: "2 years",
    },
    {
      name: "Computer Engineering",
      duration: "4 years",
    },
  ];
  return (
    <section className="max-w-5xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Courses
      </h2>
      <ul className="grid md:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <li
            key={i}
            className="bg-white p-6 shadow-md rounded-lg text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {course.name}
            </h3>
            <p className="text-gray-600 mt-2">
              Duration: <span className="font-medium">{course.duration}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Courses;
