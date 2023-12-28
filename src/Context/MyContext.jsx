import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [name, setName] = useState('');

  const contextValue = {
    name,
    setName,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};


