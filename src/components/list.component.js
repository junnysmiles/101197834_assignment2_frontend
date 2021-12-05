import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { Component } from 'react';
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import Add from './add.component'
import Update from './update.component';
import Delete from './delete.component';
import View from './view.component';

export default class List extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <h1 class="display-4 text-center my-5">Employees List</h1>
                    </div>
                    <div class="mx-5 mb-4">
                        <Link to="/add">
                            <Button variant="primary">Add Employee</Button>
                        </Link>
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
                                            <Link to="/update/:id">
                                                <Button variant="warning">Update</Button>
                                            </Link>
                                            <Link to="/view/:id">
                                                <Button variant="info">View</Button>
                                            </Link>
                                            <Link to="/delete/:id">
                                                <Button variant="danger">Delete</Button>
                                            </Link>
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
                    <Routes>
                        <Route path="/add" exact component={Add} />
                        <Route path="/update/:id" component={Update} />
                        <Route path="/delete/:id" component={Delete} />
                        <Route path="/view/:id" component={View} />
                    </Routes>
                </div>
            </Router>
        )
    }
}