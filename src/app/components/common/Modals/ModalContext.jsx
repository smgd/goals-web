import React, { createContext, useState } from 'react';
import Modals from './ModalsList';

const ModalContext = createContext({});

const ModalProvider = (props) => {
  const [modal, setModal] = useState(null);

  return (
    <ModalContext.Provider value={{ modal, setModal, Modals }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
