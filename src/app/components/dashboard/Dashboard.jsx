import React from 'react';

const Dashboard = (props) => {
  const { user } = props;
  return (
    <div>
      hi, {user}!
    </div>
  )
}

export default Dashboard;