import React, { useEffect, useState } from "react";

import CourseComponent from "./CourseComponent";
import useApi from "../hooks/useApi";
import courseApi from "../api/course";

function LoadCourseComponent({ id }) {
  const [course, setCourse] = useState();
  const { request: courseRequest } = useApi(courseApi.getCourse);
  useEffect(() => {
    (async () => {
      const apiCourse = await courseRequest(id);
      setCourse(apiCourse);
    })();
  }, []);

  return (
    <>
      {course && (
        <CourseComponent
          name={course.name}
          credits={course.credits}
          code={course.code}
        />
      )}
    </>
  );
}

export default LoadCourseComponent;
