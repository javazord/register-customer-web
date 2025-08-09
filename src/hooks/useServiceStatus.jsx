import { useState, createContext, useContext } from "react";

const ServiceStatusContext = createContext();

export function ServiceStatusProvider({ children }) {
  const [isChecking, setIsChecking] = useState(true); // começa true
  return (
    <ServiceStatusContext.Provider value={{ isChecking, setIsChecking }}>
      {children}
    </ServiceStatusContext.Provider>
  );
}

export function useServiceStatus() {
  return useContext(ServiceStatusContext);
}
