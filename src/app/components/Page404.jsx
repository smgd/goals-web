import React from 'react';
import { CenterBlockWrapper } from "./common/Common.styles";

const Page404 = () => {
  return (
    <React.Fragment>
      <CenterBlockWrapper>
        <h1>FUCK!!</h1>
        <h2>page not found</h2>
        <p>the page you requested does not exist</p>
      </CenterBlockWrapper>
    </React.Fragment>
  )
};

export default Page404;
