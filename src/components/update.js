import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Form } from 'react-bootstrap'
import axios from 'axios';

export default class Update extends Component {
    
    /*constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeEmailId = this.onChangeEmailId.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            employees: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9090/api/v1/employees/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    emailId: response.data.emailId
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangeEmailId(e) {
        this.setState({
            emailId: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`First Name: ${this.state.firstName}`)
        console.log(`Last Name: ${this.state.lastName}`)
        console.log(`Email Id: ${this.state.emailId}`)

        const updateEmployee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
        }

        axios.put('http://localhost:9090/api/v1/employees/'+ this.props.match.params.id, updateEmployee)
            .then(res => {
                console.log(res.data)
            });

        this.setState({
            firstName: '',
            lastName: '',
            emailId: ''
        })
    }*/
    
    render() {
        return (
            <div className="mx-5 mb-4">
                <div>
                    <h1 class="display-4 text-center my-5">Update Employee</h1>
                </div>
                <Form onSubmit={this.onSubmit}>
                <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="First Name"
                            //value={this.state.firstName}
                            //onChange={this.onChangeFirstName} 
                            />
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Last Name"
                            //value={this.state.lastName}
                            //onChange={this.onChangeLastName} 
                            />
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter Email"
                            //value={this.state.emailId}
                            //onChange={this.onChangeEmailId} 
                            />
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    </Form.Group>
                    <Button variant="info" type="submit" style={{marginRight:12}}>
                        Save
                    </Button>
                    <Link to="/">
                        <Button variant="danger">
                            Cancel
                        </Button>
                    </Link>
                </Form>
            </div>
        )
    }
}