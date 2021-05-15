import React, {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, isLoading};
};

export default useFetch;
