import React from "react";
import Course from "./Course";
import { useState } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

FaChevronCircleRight;
FaChevronCircleLeft;

const Courses = ({ courses, refreshCourses }) => {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const prevCourse = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(courses.length - 1);
    }
  };
  const nextCourse = () => {
    if (index < courses.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const randomCourse = () => {
    let randomIndex = Math.floor(Math.random() * courses.length);
    if (randomIndex === index) {
      nextCourse()
    }
    setIndex(randomIndex);
  };
  return (
    <>
      <div className="courseMainDiv">
        {courses.length == 0 ? (
          <img src="https://media.tenor.com/HxIJIDEpTs8AAAAC/deleting-deleted.gif"></img>
        ) : (
          <div className="headerCard">
            <h2>My Courses</h2>
            <button onClick={randomCourse} className="randomBtn">
              Random Course
            </button>
          </div>
        )}

        {courses.length == 0 ? (
          <div className="allDeletedSection">
            <h1>All data deleted</h1>
            <button className="zeroButon" onClick={refreshCourses}>
              Refresh Data
            </button>{" "}
          </div>
        ) : (
          <div className="cardDiv">
            {/* {courses.map((course) => (
              <Course
                key={course.id}
                {...course}
                removeOneCourse={removeOneCourse}
                //  course={course}
              />
            ))} */}
            <button onClick={prevCourse} className="prevNextButton">
              <FaChevronCircleLeft />
            </button>
            <div className="card">
              <div className="cardTitlePrice">
                <h2 className="cardTitle">{title}</h2>
                <h4 className="cardPrice">{price}</h4>
              </div>
              <p>{content}</p>
            </div>
            <button onClick={nextCourse} className="prevNextButton">
              <FaChevronCircleRight />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Courses;
