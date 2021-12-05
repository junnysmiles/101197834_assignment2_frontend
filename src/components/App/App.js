import './App.css';
import React from 'react';
import icon from './assets/employee-icon.png'
import { Navbar, Container } from 'react-bootstrap'
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from '../list.component';

function App() {
  return (
    <div>
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
          </Container>
        </Navbar>
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}

export default App;
