import React, { Fragment } from 'react';
import Header from '../../components/Header/navbar';
import Card from '../../components/Card/card';
import CardList from '../../components/CardList/cardList';

const Home = () => {
  return (
    <Fragment>
      <Header />

      <CardList />
    </Fragment>
  );
};

export default Home;
