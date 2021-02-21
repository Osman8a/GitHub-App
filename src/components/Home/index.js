import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const { signUp } = useContext(AuthContext);
  return (
    <div>
      <button onClick={() => signUp()}>Logout</button>
    </div>
  );
};

export default Home;
