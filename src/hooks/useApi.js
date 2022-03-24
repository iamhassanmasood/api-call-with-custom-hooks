import { useEffect, useState } from "react";
import Axios from "../services/AxiosConfig";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = () => {
    Axios.get(url)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data };
};

export default useApi;
