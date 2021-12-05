import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'

export default class View extends Component {
    render() {
        return (
            <div className="mx-5 mb-4">
                <div>
                    <h1 class="display-4 text-center my-5">View Employee</h1>
                </div>
                <div className="text-center mb-4">
                    <h3>
                    Employee First Name: 
                    <small class="text-muted">  First Name</small>
                    </h3>
                </div>
                <div className="text-center mb-4">
                    <h3>
                    Employee Last Name: 
                    <small class="text-muted">  Last Name</small>
                    </h3>
                </div>
                <div className="text-center mb-4">
                    <h3>
                    Employee Email: 
                    <small class="text-muted">  Email</small>
                    </h3>
                </div>
                <div className="text-center">
                    <Link to="/">
                        <Button variant="danger" style={{marginTop:15}}>
                            Back
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}