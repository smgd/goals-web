import React, { useContext, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { AreasContext, AreasProvider } from './Areas.context'
import AreasWrapper from './Areas.styles'
import Button from '../../common/Buttons/Button'
import Pie from '../../common/Pie'
import { Loader } from '../../common/Common.styles'
import history from '../../../router/history'
import { siteMap } from '../../siteMap'


const AreasComponent = () => {
  const { areas, setAreas } = useContext(AreasContext)

  if (!areas) return <Loader />

  return (
    <AreasWrapper>
      <AreasWrapper.Title>
        <FormattedMessage id="AreasComponent.title" />
      </AreasWrapper.Title>
      <AreasWrapper.Button>
        <Button
          onClick={() => history.push(siteMap.USER.createArea())}
        >
          <FormattedMessage id="AreasComponent.btn.create" />
        </Button>
      </AreasWrapper.Button>
      <AreasWrapper.Areas>
        <Pie
          areas={areas.map((area) => ({
            weight: area.weight,
            id: area.id,
            name: area.name,
          }))}
        />
      </AreasWrapper.Areas>
    </AreasWrapper>
  )
}

export default AreasComponent
