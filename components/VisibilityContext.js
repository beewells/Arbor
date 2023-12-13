import React, { createContext, useState } from 'react';

export const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);

  const toggleNotificationVisibility = () => {
    setIsNotificationVisible(prevState => !prevState);
  };

  return (
    <VisibilityContext.Provider value={{ isNotificationVisible, toggleNotificationVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};
