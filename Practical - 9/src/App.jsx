import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
};
export default App;
