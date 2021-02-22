import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import Header from '../../components/Header/navbar';

const Home = () => {
  const { signUp } = useContext(AuthContext);
  return (
    <Fragment>
     <Header />
     <button onClick={() => signUp()}>Logout</button>
    </Fragment>

  );
};

export default Home;
