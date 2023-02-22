import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useFetch = (argument, fetchDataFromApi) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetchDataFromApi(argument);
        setData(response);
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    };

    fetchData();
  }, [argument, data, fetchDataFromApi, navigate]);

  return data;
};

export default useFetch;
