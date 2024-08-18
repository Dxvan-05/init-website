import React from 'react';
import { useState } from 'react';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';

function Admin() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    !isLoggedIn ? < LoginPage loginToggle={ loginToggle } /> : <Dashboard />
  );
}

export default Admin