import React, { useContext, Fragment } from 'react';
import RepoContext from '../../context/repository/repoContext';

const CardList = () => {
  const { dataRepo } = useContext(RepoContext);
  return (
    <Fragment>
      {dataRepo.map((repo) => {
        console.log(repo);
      })}
    </Fragment>
  );
};

export default CardList;
