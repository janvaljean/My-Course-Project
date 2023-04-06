import React from "react";
import Course from "./Course";

const Courses = ({ courses, removeOneCourse, refreshCourses }) => {
  console.log(courses.length);
  return (
    <>
      <div className="courseMainDiv">
        {courses.length == 0 ? (
          <img src="https://media.tenor.com/HxIJIDEpTs8AAAAC/deleting-deleted.gif"></img>
        ) : (
          <div>
            <h2>My Courses</h2>
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
            {courses.map((course) => (
              <Course
                key={course.id}
                {...course}
                removeOneCourse={removeOneCourse}
                //  course={course}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Courses;
