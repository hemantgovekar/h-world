import React, {useState, useEffect} from 'react';
import useFetch from '../../hooks/useFetch';
import UserDetail from './UserDetail';

const Users = () => {
  let url = 'https://jsonplaceholder.typicode.com/users';
  const {data, isLoading} = useFetch(url);

  return (
    <div>
      {!isLoading &&
        data &&
        data.map((u, i) => <UserDetail key={i} user={u}></UserDetail>)}
    </div>
  );
};

export default Users;
