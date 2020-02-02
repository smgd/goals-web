import React, { useContext, useState } from 'react';
import { AreasContext, AreasProvider } from './Areas.context';
import AreasWrapper from "./Areas.styles";
import Button from "../../common/Buttons/Button";

const AreaComponent = () => {
  const { areas, setAreas } = useContext(AreasContext);

  const renderArea = () => {
    return areas.toString();
  };

  const renderAreas = () => {
    return areas.map(() => renderArea())
  };

  return (
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
        {renderAreas()}
      </AreasWrapper.Areas>
    </AreasWrapper>
  );
};

export default AreaComponent;
