import React from 'react';
import history from '../../router/history'

const Dashboard = (props) => {
  const { user } = props;
  return (
    <div>
      hi, {user.username}!
    </div>

  )
};

export default Dashboard;
