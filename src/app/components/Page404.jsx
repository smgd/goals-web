import React from 'react';
import { CenterBlockWrapper } from "./common/Common.styles";
import { FormattedMessage } from 'react-intl';

const Page404 = () => {
  return (
    <CenterBlockWrapper>
      <FormattedMessage id="Page404.title" tagName="h1"/>
      <FormattedMessage id="Page404.subTitle" tagName="h2"/>
      <FormattedMessage id="Page404.description" tagName="p"/>
    </CenterBlockWrapper>
  )
};

export default Page404;
