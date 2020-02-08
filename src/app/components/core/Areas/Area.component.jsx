import React, { useState } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import history from '../../../router/history'
import AreasWrapper, { AreaInputs } from './Areas.styles'
import Button from '../../common/Buttons/Button'
import Input from '../../common/Inputs/Input'
import { createArea } from './api'
import { siteMap } from '../../siteMap'

const AreaComponent = ({ intl }) => {
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)
  const [weight, setWeight] = useState(null)

  const onWeightUpdate = (val) => {
    let cleanVal = Number(val.replace(/[^0-9 ]/g, ''))

    if (cleanVal > 10) {
      cleanVal = 10
    }
    setWeight(cleanVal)
  }

  const onCreate = () => {
    createArea(name, description, '', false, weight)
      .then(() => history.push(siteMap.USER.areas()))
  }

  return (
    <AreasWrapper>
      <AreasWrapper.Title>
        <FormattedMessage id="AreaComponent.title" />
      </AreasWrapper.Title>
      <AreasWrapper.Areas>
        <AreaInputs>
          <Input
            type="text"
            theme="lightWithBorder"
            placeholder={intl.formatMessage({ id: 'AreaComponent.field.name' })}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            theme="lightWithBorder"
            placeholder={intl.formatMessage({ id: 'AreaComponent.field.description' })}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="text"
            theme="lightWithBorder"
            placeholder={intl.formatMessage({ id: 'AreaComponent.field.weight' })}
            value={weight}
            onChange={(e) => onWeightUpdate(e.target.value)}
          />
          <Button
            onClick={onCreate}
          >
            <FormattedMessage id="AreaComponent.btn.create" />
          </Button>
        </AreaInputs>
      </AreasWrapper.Areas>
    </AreasWrapper>
  )
}

const AreaComponentWithIntl = injectIntl(AreaComponent)

export default AreaComponentWithIntl
