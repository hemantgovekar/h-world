import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
    setIsLoading(false);
  });

  return {data, isLoading};
};

export default useFetch;
