import React from 'react';
import graphQLFetch from './GraphQLFetch';
import { Form, Button } from 'react-bootstrap'

class EmployeeAdd extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        /*setTimeout(() => {
            const newIssue = {status: 'Assigned', owner: 'Person-C', title: 'Add New Issue'}
            this.props.createIssue(newIssue);
        }, 3000); */
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.employeeAdd;
        const employeeAge = parseInt(form.Age.value)
        if (employeeAge >= 20 && employeeAge <= 70) {
            const employee = {
                FirstName: form.FirstName.value,
                LastName: form.LastName.value,
                Age: parseInt(form.Age.value),
                DateOfJoining: form.DateOfJoining.value,
                Title: form.Title.value,
                Department: form.Department.value,
                EmployeeType: form.EmployeeType.value,
                CurrentStatus: form.currentStatus.value === "true" ? true : false
            }
            this.createEmployee(employee);
        } else {
            form.Age.value = "";
            alert("Invalid Age. Age Must be 20 and 70 !");
        }
    }

    async createEmployee(employee) {
        const query = `
        mutation employeeAdd($employee: EmployeeInputs!) {
            employeeAdd(employee: $employee) {
                FirstName
                LastName
                Age
                DateOfJoining
                Title
                Department
                EmployeeType
                CurrentStatus
                } 
        }`;
        const data = await graphQLFetch(query, { employee });
        if (data) {
            alert('Employee Added Successfully !');
            window.location.href = "/"
        }
    }

    render() {
        return (<div className="mt-70">
            <h4 className="text-center">Add New Employee</h4>
            <Form name="employeeAdd" id="contact" className="createEmployee" onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="FirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" className="inputField" name="FirstName" id="FirstName" placeholder="First Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" className="inputField" name="LastName" id="LastName" placeholder="Last Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="LastName">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" className="inputField" name="Age" id="Age" placeholder="Age" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="DateOfJoining">
                    <Form.Label>Date Of Joining</Form.Label>
                    <Form.Control type="date" className="inputField" name="DateOfJoining" id="DateOfJoining" placeholder="Date Of Joining" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Title">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Select name="Title" className="inputField" id="Title" required>
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="Director">Director</option>
                        <option value="VP">VP</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Department">
                    <Form.Label>Department</Form.Label>
                    <Form.Select name="Department" className="inputField" id="Department" required>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Engineering">Engineering</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="EmployeeType">
                    <Form.Label>Employee Type</Form.Label>
                    <Form.Select id="EmployeeType" className="inputField" name="EmployeeType" required>
                        <option value="FullTime">FullTime</option>
                        <option value="PartTime">PartTime</option>
                        <option value="Contract">Contract</option>
                        <option value="Seasonal">Seasonal</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="currentStatus">
                    <Form.Label>Current Status</Form.Label>
                    <Form.Check type="radio" name="currentStatus" id="currentStatus1" value="true" label="Working" defaultChecked />
                    <Form.Check type="radio" name="currentStatus" id="currentStatus2" value="false" label="Retired" />
                </Form.Group>
                <Button type="submit" variant='primary' className='mx-auto d-block'>Create New Employee</Button>
            </Form>
            </div>
        )
    }
}

export default EmployeeAdd