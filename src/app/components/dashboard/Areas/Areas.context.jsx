import React, { createContext, useState, useEffect } from 'react';
import {fetchAndSetAreas} from "./api";

const AreasContext = createContext({});

const AreasProvider = props => {

  const testAreas = [
    {
      name: 'test',
      icon: 'none',
      description: 'test description',
      isFavourite: false,
    },
  ];

  const [areas, setAreas] = useState(testAreas);

  useEffect(() => fetchAndSetAreas(setAreas), []);

  return (
    <AreasContext.Provider value={{ areas, setAreas }}>
      {props.children}
    </AreasContext.Provider>
  );
};

export { AreasContext, AreasProvider };
