import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from 'react';
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from './assets/employee-icon.png'
import { Navbar, Container, Button } from 'react-bootstrap'

function App() {
  return (
    <div>
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
      <div>
        <h1 class="display-4 text-center my-5">Employees List</h1>
      </div>
      <div class="mx-5 mb-4">
        <Button variant="primary">Add Employee</Button>
      </div>
      <div>
        <div class="mx-5">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">Employee First Name</th>
                <th scope="col">Employee Last Name</th>
                <th scope="col">Employee Email ID</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td class="mx-3">
                  <Button variant="warning">Update</Button>
                  <Button variant="info">View</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td class="mx-3">
                  <Button variant="warning">Update</Button>
                  <Button variant="info">View</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td class="mx-3">
                  <Button variant="warning">Update</Button>
                  <Button variant="info">View</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
