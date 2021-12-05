import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap'

export default class Update extends Component {
    render() {
        return (
            <div className="mx-5 mb-4">
                <div>
                    <h1 class="display-4 text-center my-5">Update Employee</h1>
                </div>
                <Form>
                <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control placeholder="First Name" />
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control placeholder="Last Name" />
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    </Form.Group>
                    <Button variant="info" type="submit" style={{marginRight:12}}>
                        Save
                    </Button>
                    <Button variant="danger">
                        Cancel
                    </Button>
                </Form>
            </div>
        )
    }
}