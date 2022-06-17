import apiClient from "./client";

const endpoint = "/enroll";

function createEnrollments(enrollments) {
  return apiClient.post(endpoint, { ...enrollments });
}

function getCoursesFromEnrollment(enrollment) {
  return apiClient.get(`${endpoint}/${enrollment}`);
}

export default {
  createEnrollments,
  getCoursesFromEnrollment,
};
