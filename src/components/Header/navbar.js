import React, { useContext, useState } from 'react';
import RepoContext from '../../context/repository/repoContext';
import AuthContext from '../../context/auth/authContext';
import logo from './logo.png';

const Header = () => {
  const { onSearchRepo } = useContext(RepoContext);
  const { user } = useContext(AuthContext);

  //state local
  const [textValue, setTerm] = useState({
    term: '',
  });
  const { term } = textValue;

  const onChangeSendText = (e) => {
    setTerm({
      ...textValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearchTerm = (e) => {
    e.preventDefault();
    onSearchRepo(term, user);
  };

  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={logo} alt="" />
          GitHub
        </a>
      </div>
      <div className="navbar-item">
        <form onSubmit={handleSearchTerm}>
          <input
            className="input is-small"
            type="text"
            placeholder="Small input"
            name="term"
            onChange={onChangeSendText}
          ></input>
          <button type="submit">search</button>
        </form>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">users</a>

          <a className="navbar-item">repositories</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
