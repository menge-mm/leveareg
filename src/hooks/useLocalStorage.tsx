import React from "react";

const useLocalStorage = () => {
  const encrypt =  (data: any): any => {
    return data;
  };

  const addItem =  (key: string, data: any):boolean => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      return false;
    }
  };

  const addEncryptedItem = async (key: string, data: any): Promise<boolean> => {
    const encryptedData = await encrypt(data);
    return await addItem(key, encryptedData);
  };

  const removeItem =  (key: string): boolean => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  };

  const getItem =  (key: string): any | null => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      return null;
    }
  };

  const clearAll =  (): boolean=> {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      return false;
    }
  };

  const getAllKeys =  (): string[] | null => {
    try {
      return Object.keys(localStorage);
    } catch (error) {
      return null;
    }
  };

  return { addItem, removeItem, getItem, clearAll, getAllKeys, addEncryptedItem };
};

export default useLocalStorage;
