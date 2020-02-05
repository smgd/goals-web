import React, { useState } from 'react';
import history from "../../../router/history";
import AreasWrapper, { AreaInputs } from "./Areas.styles";
import Button from "../../common/Buttons/Button";
import Input from "../../common/Inputs/Input";
import { createArea } from "./api";

const AreaComponent = () => {
  const [ name, setName ] = useState(null);
  const [ description, setDescription ] = useState(null);
  const [ weight, setWeight ] = useState(null);

  const onWeightUpdate = (val) => {
    let cleanVal = Number(val.replace(/[^0-9 ]/g, ''));

    if (cleanVal > 10) {
      cleanVal = 10;
    }
    setWeight(cleanVal)
  };

  const onCreate = () => {
    createArea(name, description, '', false, weight)
      .then(() => history.push('/areas'))
  };

  return (
      <AreasWrapper>
        <AreasWrapper.Title>Create New Area</AreasWrapper.Title>
        <AreasWrapper.Areas>
          <AreaInputs>
            <Input
              type="text"
              theme='lightWithBorder'
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              theme='lightWithBorder'
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              type="text"
              theme='lightWithBorder'
              placeholder="Weight"
              value={weight}
              onChange={(e) => onWeightUpdate(e.target.value)}
            />
            <Button
              title="Create"
              type="light"
              onClick={onCreate}
            />
          </AreaInputs>
        </AreasWrapper.Areas>
      </AreasWrapper>
  );
};

export default AreaComponent;
