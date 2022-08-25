import { useSearchParams } from 'react-router-dom';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { UseUsersGet, useUsersGet } from '../hooks/users';

interface UsersContext {
  usersGet: UseUsersGet | null;
}

const defaultValue: UsersContext = {
  usersGet: null,
};

export const UsersContext = createContext<UsersContext>(defaultValue);

const UsersProvider: React.FC = ({ children }) => {
  const usersGet = useUsersGet();
  const [searchParams] = useSearchParams();

  const [name, setName] = useState<string>(searchParams.get('name') || '');

  useEffect(() => {
    usersGet.fetch(name);
  }, [name]);

  useEffect(() => {
    const queryName = searchParams.get('name') || '';

    setName(queryName);
  }, [searchParams]);

  return (
    <UsersContext.Provider value={{ usersGet }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

export const useContextUsers = (): UsersContext => useContext(UsersContext);
