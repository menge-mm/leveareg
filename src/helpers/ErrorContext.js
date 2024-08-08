import React, { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export function ErrorProvider({ children }) {
  const [error, setError] = useState(null);

  const showError = (message) => {
    setError(message);
  };

  const hideError = () => {
    setError(null);
  };

  return (
    <ErrorContext.Provider value={{ error, showError, hideError }}>
      {children}
    </ErrorContext.Provider>
  );
}
