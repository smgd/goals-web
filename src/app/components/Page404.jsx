import React from 'react';
import { WhiteCard } from "./common/Common.styles";

const Page404 = () => {
  return (
    <React.Fragment>
      <WhiteCard>
        <h1>FUCK!!</h1>
        <h2>page not found</h2>
        <p>the page you requested does not exist</p>
      </WhiteCard>
    </React.Fragment>
  )
};

export default Page404;
