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
  const { user, signUp } = useContext(AuthContext);

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
    <Navbar bg="dark" expand="lg" variant="dark">
     
    <Navbar.Brand href="#home"> <img src={logo} width="45" className="d-inline-block align-top" alt="GitHub logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">User</Nav.Link>
        <Nav.Link href="#pricing">repositories</Nav.Link>
        
      </Nav>

      <Nav>
      <img style={{borderRadius: '50%'}} src={user.photo}  width="50"  className="d-inline-block align-top radiusImg" alt="img user"/>
      <NavDropdown id="nav-dropdown">
      <NavDropdown.Item eventKey="4.1"  onClick={() => signUp()}>SingUp</NavDropdown.Item>
      </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
</Navbar>
  );
};

export default Header;
