import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { Component } from 'react';
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import Add from "./add";

export default class List extends Component {
    render() {
        return (
                <div>
                    <div>
                        <h1 class="display-4 text-center my-5">Employees List</h1>
                    </div>
                    <div class="mx-5 mb-4">
                        <Link to="/add-employee">
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
                                                <Button variant="warning" style={{marginRight:12}}>Update</Button>
                                            </Link>
                                            <Link to="/view/:id">
                                                <Button variant="info" style={{marginRight:12}}>View</Button>
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
                                            <Button variant="warning" style={{marginRight:12}}>Update</Button>
                                            <Button variant="info" style={{marginRight:12}}>View</Button>
                                            <Button variant="danger">Delete</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td class="mx-3">
                                            <Button variant="warning" style={{marginRight:12}}>Update</Button>
                                            <Button variant="info" style={{marginRight:12}}>View</Button>
                                            <Button variant="danger">Delete</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Routes>
                            <Route path="/" exact component={List} />
                            <Route path="/add-employee" component={Add} />
                        </Routes>
                    </div>
                </div>
        )
    }
}