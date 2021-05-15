import React from 'react';
import useFetch from '../../hooks/useFetch';

const Users = () => {
  let url = 'https://jsonplaceholder.typicode.com/users';

  const {data, isLoading} = useFetch(url);

  return (
    <div>
      {!isLoading && data.map((u) => <div key={u.id}>{u.username}</div>)}
    </div>
  );
};

export default Users;
