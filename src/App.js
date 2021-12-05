import './App.css';
import React from 'react';
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './assets/employee-icon.png'
import { Navbar, Container } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Employee Management App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
