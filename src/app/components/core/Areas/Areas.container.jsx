import React, { useContext, useState } from 'react'
import { AreasContext, AreasProvider } from './Areas.context'
import { AreasWrapper } from './Areas.styles'
import AreasComponent from './Areas.component'

const AreasContainer = () => (
  <AreasProvider>
    <AreasComponent />
  </AreasProvider>
)

export default AreasContainer
