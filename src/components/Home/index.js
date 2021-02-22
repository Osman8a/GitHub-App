import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import Header from '../../components/Header/navbar';

const Home = () => {
  const { signUp } = useContext(AuthContext);
  return (
    <Fragment>
     <Header />
    </Fragment>

  );
};

export default Home;
