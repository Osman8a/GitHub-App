import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import Header from '../../components/Header/navbar';

const Home = () => {
  const { signUp } = useContext(AuthContext);
  return (
    <div>
      <Header />
      <button onClick={() => signUp()}>Logout</button>
    </div>
  );
};

export default Home;
