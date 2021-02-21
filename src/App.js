import React from 'react';
import AuthState from './context/auth/authState';
import Login from './components/Auth';

const App = () => {
  return (
    <AuthState>
      <Login />
    </AuthState>
  );
};

export default App;
