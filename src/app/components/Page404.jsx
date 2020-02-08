import React from 'react'
import { FormattedMessage } from 'react-intl'
import { CenterBlockWrapper } from './common/Common.styles'

const Page404 = () => (
  <CenterBlockWrapper>
    <FormattedMessage id="Page404.title" tagName="h1" />
    <FormattedMessage id="Page404.subTitle" tagName="h2" />
    <FormattedMessage id="Page404.description" tagName="p" />
  </CenterBlockWrapper>
)

export default Page404
