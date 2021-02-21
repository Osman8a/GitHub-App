import React from 'react';
import AuthState from './context/auth/authState';
import RepoState from './context/repository/repoState';
import Login from './components/Auth';
import './App.sass';

const App = () => {
  return (
    <AuthState>
      <RepoState>
        <Login />
      </RepoState>
    </AuthState>
  );
};

export default App;
