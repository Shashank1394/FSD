import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="max-2-4l mx-auto mt-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to My College!
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Provideing quality education and opportunities since 1990
      </p>
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        onClick={() => navigate("/courses")}
      >
        Explore Courses
      </button>
    </section>
  );
};
export default Home;
