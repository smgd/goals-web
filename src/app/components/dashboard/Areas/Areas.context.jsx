import React, { createContext, useState, useEffect } from 'react';

const AreasContext = createContext({});

const AreasProvider = props => {

  const testAreas = [
    {
      id: 'test',
      name: 'test',
      icon: 'none',
      description: 'test description',
      isFavorite: false,
      isNotifications: false,
    },
  ];

  const [areas, setAreas] = useState(testAreas);

  // useEffect(() => fetchAndSetAreas(setUser), []);

  return (
    <AreasContext.Provider value={{ areas, setAreas }}>
      {props.children}
    </AreasContext.Provider>
  );
};

export { AreasContext, AreasProvider };
