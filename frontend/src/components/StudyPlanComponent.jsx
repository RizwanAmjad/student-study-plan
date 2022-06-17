import React from "react";

function StudyPlanComponent({ onClick, selected, name }) {
  return (
    <div
      className={`course-container ${selected ? "selected" : ""}`}
      style={{ height: "auto" }}
      onClick={onClick}
    >
      <h4>{name}</h4>
    </div>
  );
}

export default StudyPlanComponent;
