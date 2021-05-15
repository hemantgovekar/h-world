import React from 'react';
import useFetch from '../../hooks/useFetch';

const Posts = () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/1';

  const {data, isLoading} = useFetch(url);

  return (
    <div>
      {!isLoading && (
        <div>
          {data.title}
          {data.body}
        </div>
      )}
    </div>
  );
};

export default Posts;
