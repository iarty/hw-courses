import { useCallback, useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = "get", body = null) => {
    const baseUrl = `https://redux-6b899.firebaseio.com/adminPanel/${url}.json`;
    setLoading(true);
    try {
      const response = await axios({
        method,
        url: baseUrl,
        data: JSON.stringify(body)
      });
      setLoading(false);
      return response.data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
