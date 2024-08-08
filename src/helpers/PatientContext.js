import React, { createContext, useState, useEffect } from 'react';

export const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);

  const updateLocation = (newLocation) => {
    setLocation(newLocation);
  };

  const selectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  useEffect(() => {
    let intervalId;

    const fetchPatients = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://leveadocdashpilotfunc.azurewebsites.net/api/leveadocdashpilotfunc`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ action: 'fetch', location }),
          },
        );
        if (response.ok) {
          const data = await response.json();

          if (Array.isArray(data)) {
            // Data is an array, set it directly
            setPatients(data);
          } else if (data && typeof data === 'object') {
            // Data is a single object, put it in an array
            setPatients([data]);
          } else {
            // Data is neither an array nor an object
            console.error('Invalid data format:', data);
          }
        } else {
          throw new Error('Failed to fetch patients');
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
      setLoading(false);
    };

    if (location) {
      // Fetch initial data immediately if location is known
      fetchPatients();

      // Set up the interval for polling
      intervalId = setInterval(fetchPatients, 90000); // Poll every 30 seconds
    }

    // Clean up the interval when the location changes or the component unmounts
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [location]);

  return (
    <PatientContext.Provider
      value={{
        patients,
        selectedPatient,
        loading,
        setPatients,
        updateLocation,
        setSelectedPatient,
        selectPatient, // Add this line to expose selectPatient function
        location, // consider exposing location if needed elsewhere in your app
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}
