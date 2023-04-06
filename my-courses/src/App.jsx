import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import Courses from "./Courses";
import { Image } from "react-bootstrap";
import Loading from "./Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeOneCourse = (id) => {
    const filteredData = courses.filter((course) => course.id !== id);
    setCourses(filteredData)
  };

  const refreshCourses = () => {
    fetchcourses()
  }

  const fetchcourses = async () => {
    setLoading(true);
    try {
      const respponse = await axios.get("http://localhost:3000/courses");
      setCourses(respponse.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchcourses()
    }, 5000);
  }, []);

  

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <Courses
          courses={courses}
          removeOneCourse={removeOneCourse}
          refreshCourses={refreshCourses}
        />
      )}
    </div>
  );
}

export default App;
