import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import NavContainer from "../components/NavContainer";
import CourseComponent from "../components/CourseComponent";

import useAuth from "../hooks/useAuth";
import useApi from "../hooks/useApi";

import courseApi from "../api/course";
import enrollmentApi from "../api/enrollment";
import studyPlanApi from "../api/studyPlan";

import "./css/home.css";

function HomeScreen(props) {
  const [selected, setSelected] = useState([]);

  const [courses, setCourses] = useState([]);
  const { user } = useAuth();

  const handleClick = (key) => {
    console.log(selected.includes(key), key);
    if (selected.includes(key)) {
      const selectedNew = selected.filter((value) => value != key);
      setSelected(selectedNew);
    } else {
      setSelected([...selected, key]);
    }
  };

  const handleCreatePlan = async () => {
    const name = prompt("Enter Name for study plan");
    if (name) {
      const studyPlan = await createStudyPlanRequest({ name });

      await createEnrollmentRequest({
        courses: selected,
        studyPlan: studyPlan.id,
      });
      alert("Successfully Create the Study plan");
    }
  };

  const { request: createEnrollmentRequest } = useApi(
    enrollmentApi.createEnrollments
  );
  const { request: createStudyPlanRequest } = useApi(
    studyPlanApi.createStudyPlan
  );

  const { request: courseRequest } = useApi(courseApi.getAllCourses);

  useEffect(() => {
    (async () => {
      const apiCourses = await courseRequest();
      setCourses(apiCourses);
    })();
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <NavContainer name={user.name}>
      <div className="button-container">
        <button onClick={handleCreatePlan}>Create a plan</button>
      </div>
      <div className="courses-container">
        {courses.map((course) => (
          <CourseComponent
            key={course.id}
            name={course.name}
            code={course.code}
            selected={selected.includes(course.id)}
            onClick={() => handleClick(course.id)}
            credits={course.credits}
          />
        ))}
      </div>
    </NavContainer>
  );
}

export default HomeScreen;
