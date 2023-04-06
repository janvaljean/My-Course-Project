import React from "react";

const Course = ({ id, content, title, price, removeOneCourse }) => {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price}</h4>
      </div>
      <p>{content}</p>
      <button onClick={() => removeOneCourse(id)} className="cardDeleteBtn">
        Delete
      </button>
    </div>
  );
};

export default Course;
