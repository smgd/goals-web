import React, {useContext, useEffect, useState} from 'react';
import { AreasContext, AreasProvider } from './Areas.context';
import AreasWrapper from "./Areas.styles";
import Button from "../../common/Buttons/Button";
import Pie from "../../common/Pie";
import {Loader} from "../../common/Common.styles";

const AreasComponent = () => {
  const { areas, setAreas } = useContext(AreasContext);

  return (!areas ? <Loader/> :
    <AreasWrapper>
      <AreasWrapper.Title>Your Areas</AreasWrapper.Title>
      <AreasWrapper.Button>
        <Button
          title="Add new"
          type="light"
          onClick={() => {}}
        />
      </AreasWrapper.Button>
      <AreasWrapper.Areas>
        <Pie
          areas={areas.map((area, i) => ({
            weight: 3 + i, // here will be weight set by user
            id: i, // here will be area id
            name: area.name,
          }))}
          animate
        />
      </AreasWrapper.Areas>
    </AreasWrapper>
  );
};

export default AreasComponent;
