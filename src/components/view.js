import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import axios from 'axios'

export default class View extends Component {
    
    /*constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9090/api/v1/employees')
        .then(response => {
            this.setState({employees: response.data})
        })
        .catch(function(error) {
            console.log(error)
        })

        axios.get('http://localhost:9090/api/v1/employees/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    emailId: response.data.emailId
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }*/

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
                    <small class="text-muted">  Email Id</small>
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