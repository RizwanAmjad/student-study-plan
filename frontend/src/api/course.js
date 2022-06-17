import apiClient from "./client";

const endpoint = "/courses";

function getAllCourses() {
  return apiClient.get(endpoint);
}

function getCourse(id) {
  return apiClient.get(`${endpoint}/${id}`);
}

export default {
  getAllCourses,
  getCourse,
};
