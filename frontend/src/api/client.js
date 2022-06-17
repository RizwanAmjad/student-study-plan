import { create } from "apisauce";

import authStorage from "../auth/storage";

import backend from "../config/backend";

const apiClient = create({
  baseURL: backend.backendURL,
});

apiClient.addAsyncRequestTransform(async (request) => {
  request.headers["x-auth-token"] = await authStorage.getToken();
});

export default apiClient;
