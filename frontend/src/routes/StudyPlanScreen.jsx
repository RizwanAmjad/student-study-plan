import React, { useEffect, useState } from "react";

import NavContainer from "../components/NavContainer";

import useAuth from "../hooks/useAuth";
import useApi from "../hooks/useApi";
import studyPlanApi from "../api/studyPlan";
import enrollmentApi from "../api/enrollment";
import StudyPlanComponent from "../components/StudyPlanComponent";
import { Navigate } from "react-router-dom";

import "./css/home.css";
import LoadCourseComponent from "../components/LoadCourseComponent";

function StudyPlanScreen(props) {
  const { user } = useAuth();
  const [studyPlans, setStudyPlans] = useState([]);
  const [courses, setCourses] = useState([]);

  const [selected, setSelected] = useState();

  const { request: getStudyPlansRequest } = useApi(
    studyPlanApi.getAllStudyPlans
  );

  const { request: getCoursesRequest } = useApi(
    enrollmentApi.getCoursesFromEnrollment
  );

  const handlePlanClick = (id) => {
    setSelected(id);
  };

  useEffect(() => {
    (async () => {
      const plans = await getStudyPlansRequest();
      setStudyPlans(plans);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const courses = await getCoursesRequest(selected);
      setCourses(courses);
    })();
  }, [selected]);

  if (!user) return <Navigate to="/" />;

  return (
    <NavContainer name={user.name}>
      <div className="courses-container">
        {studyPlans.map((plan) => (
          <StudyPlanComponent
            key={plan.id}
            name={plan.name}
            selected={plan.id == selected}
            onClick={() => handlePlanClick(plan.id)}
          />
        ))}
      </div>
      <div className="courses-container">
        {courses.map((course) => (
          <LoadCourseComponent key={course.id} id={course.course} />
        ))}
      </div>
    </NavContainer>
  );
}

export default StudyPlanScreen;
