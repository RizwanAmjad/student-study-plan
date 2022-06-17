import { useState } from "react";
import { CLIENT_ERROR } from "apisauce";

export default (apiFunction) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (...args) => {
    setLoading(true);
    const result = await apiFunction(...args);
    if (!result.ok) {
      if (result.problem === CLIENT_ERROR) {
        setError(result.data ? result.data : "Unknown Client Error");
      } else {
        setError("Can't connect to the Service");
      }
      return setLoading(false);
    }
    setError(null);
    setLoading(false);
    return result.data;
  };

  return { error, loading, request };
};
