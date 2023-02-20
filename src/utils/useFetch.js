import { useState, useEffect } from 'react';

const useFetch = (argument, fetchDataFromApi) => {
  const [data, setData] = useState(null);

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
      }
    };

    fetchData();
  });

  return data;
};

export default useFetch;
