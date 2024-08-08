import { createContext, useState, useContext } from 'react';

const ModuleTitleContext = createContext();

export const ModuleTitleProvider = ({ children }) => {
  const [moduleTitle, setModuleTitle] = useState('');
  return (
    <ModuleTitleContext.Provider value={{ moduleTitle, setModuleTitle }}>
      {children}
    </ModuleTitleContext.Provider>
  );
};

export const useModuleTitle = () => {
  const context = useContext(ModuleTitleContext);
  if (context === undefined) {
    throw new Error('useModuleTitle must be used within a ModuleTitleProvider');
  }
  return context;
};
