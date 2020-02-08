import React from 'react'
import { AreasProvider } from './Areas.context'
import AreasComponent from './Areas.component'

const AreasContainer = () => (
  <AreasProvider>
    <AreasComponent />
  </AreasProvider>
)

export default AreasContainer
