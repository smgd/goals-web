import React, { useContext, useState } from 'react';
import { AreasContext, AreasProvider } from './Areas.context';
import {AreasWrapper} from "./Areas.styles";
import AreaComponent from "./Areas.component";

const AreasContainer = () => {

  return (
    <AreasProvider>
      <AreaComponent />
    </AreasProvider>
  );
};

export default AreasContainer;
