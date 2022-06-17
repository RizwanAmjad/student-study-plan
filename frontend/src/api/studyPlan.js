import apiClient from "./client";

const endpoint = "/study-plan";

function createStudyPlan(name) {
  return apiClient.post(endpoint, name);
}

function getAllStudyPlans() {
  return apiClient.get(endpoint);
}

export default {
  createStudyPlan,
  getAllStudyPlans,
};
