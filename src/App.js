import icon from './assets/employee-icon.png'
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import List from './components/list'
import Add from './components/add';
import React, { Component } from 'react';
import Update from './components/update';
import View from './components/view';
import AddEmployee from './components/add';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={icon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Employee Management App
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" />
              <Nav className="me-auto">
                <Link to="/">
                  <Button variant="outline-light" size="sm" style={{marginRight: 15}}>
                    Employee List
                  </Button>
                </Link>
                <Link to="/add-employee">
                  <Button variant="outline-light" size="sm">
                    Add Employee
                  </Button>
                </Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" exact component={List} />
            <Route path="/add-employee" component={Add} />
          </Routes>
      </div>
      <div>
        <List />
      </div>
      <div>
        <Add />
      </div>
      <div>
        <Update />
      </div>
      <div>
        <View />
      </div>
    </Router>
    );
  }
}

export default App;
