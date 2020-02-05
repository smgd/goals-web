import React, {useContext, useEffect, useState} from 'react';
import { AreasContext, AreasProvider } from './Areas.context';
import AreasWrapper from "./Areas.styles";
import Button from "../../common/Buttons/Button";
import Pie from "../../common/Pie";
import { Loader } from "../../common/Common.styles";
import history from "../../../router/history";


const AreasComponent = () => {
  const { areas, setAreas } = useContext(AreasContext);

  return (!areas ? <Loader/> :
    <AreasWrapper>
      <AreasWrapper.Title>Your Areas</AreasWrapper.Title>
      <AreasWrapper.Button>
        <Button
          title="Create Area"
          type="light"
          onClick={() => history.push('/areas/create')}
        />
      </AreasWrapper.Button>
      <AreasWrapper.Areas>
        <Pie
          areas={areas.map(area => ({
            weight: area.weight,
            id: area.id,
            name: area.name,
          }))}
        />
      </AreasWrapper.Areas>
    </AreasWrapper>
  );
};

export default AreasComponent;
