import React from "react";

import "./css/course.css";

function CourseComponent({ code, name, credits, selected, onClick }) {
  return (
    <div
      className={`course-container ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <h2>{code}</h2>
      <p>{name}</p>
      <p>{credits}</p>
    </div>
  );
}

export default CourseComponent;
