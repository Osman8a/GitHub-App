import React from 'react';
import AuthState from './context/auth/authState';
import RepoState from './context/repository/repoState';
import UserState from './context/user/userState';
import Login from './components/Auth';

const App = () => {
  return (
    <AuthState>
      <RepoState>
        <UserState>
          <Login />
        </UserState>
      </RepoState>
    </AuthState>
  );
};

export default App;
