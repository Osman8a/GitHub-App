import React, { useContext, useState, Fragment } from 'react';
import RepoContext from '../../context/repository/repoContext';
import AuthContext from '../../context/auth/authContext';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import logo from '../../logo.png';

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
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="GitHub logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button type="submit">Submit</Button>
          </Form>
          <Nav.Link href="#features">User</Nav.Link>
          <Nav.Link href="#pricing">repositories</Nav.Link>
        </Nav>
        <img
          src={user.photo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="GitHub logo"
        />
        <NavDropdown id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">SingUp</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </Fragment>
  );
};

export default Header;
