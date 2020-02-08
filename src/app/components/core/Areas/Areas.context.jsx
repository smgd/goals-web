import React, { createContext, useState, useEffect } from 'react'
import { fetchAndSetAreas } from './api'

const AreasContext = createContext({})

const AreasProvider = (props) => {
  const [areas, setAreas] = useState(null)

  useEffect(() => fetchAndSetAreas(setAreas), [])

  return (
    <AreasContext.Provider value={{ areas, setAreas }}>
      {props.children}
    </AreasContext.Provider>
  )
}

export { AreasContext, AreasProvider }
