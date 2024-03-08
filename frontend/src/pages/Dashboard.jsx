import React from 'react';
import { Appbar } from '../components/AppBar';
import { Balance } from '../components/Ballance';
import { Users } from '../components/Users.jsx';


function Dashboard() {
  return (
    <div>
      <Appbar/>
      <Balance/>
      <Users/>
    </div>
  );
}

export default Dashboard;
