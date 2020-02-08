import React, { createContext, useState } from 'react'

const ModalContext = createContext({})

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null)

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider }
