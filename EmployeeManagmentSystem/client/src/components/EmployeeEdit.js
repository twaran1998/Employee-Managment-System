import React from 'react';
import graphQLFetch from './GraphQLFetch';
import { Button, Form, Stack } from 'react-bootstrap';

class EmployeeEdit extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            employee: null,
            status: false,
            Title: "VP",
            Department: "Marketing",
        }
    }

    componentDidMount() {
        const userid = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1, window.location.pathname.length)
        this.getEmployeeById(userid)
    }

    getEmployeeById = (_id) => {
        const query = `
        mutation singleUser($_id: String!) {
            singleUser(_id: $_id) {
                id
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
        async function EmployeeData(url = '', data = {}, variables) {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query, variables })
            });
            return response.json();
        }

        EmployeeData('http://localhost:4000/graphql', query, { _id })
            .then(result => {
                console.log(result, 'result')
                this.setState({
                    employee: result.data.singleUser,
                    status: result.data.singleUser.CurrentStatus,
                    Title: result.data.singleUser.Title,
                    Department: result.data.singleUser.Department,
                });
                return null;
            })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { status, employee, Title, Department } = this.state
        const form = document.forms.editEmployee;
        const employeeAge = parseInt(form.Age.value)
        if (employeeAge >= 20 && employeeAge <= 70) {
            const newemployee = {
                id: employee.id,
                title: Title,
                department: Department,
                currentstatus: status
            }
            this.updateEmployee(newemployee);
        } else {
            form.Age.value = "";
            alert("Age must be between 20 and 70  !!!!");
        }
    }

    async updateEmployee(newemployee) {
        const query = `
        mutation updateUserBasedOnID($newuser: UserUpdatePayload!) {
            updateUserBasedOnID(newuser: $newuser) {
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
        const data = await graphQLFetch(query, { newuser: newemployee });
        if (data) {
            alert('Employee Updated Successfully !!!!');
            window.location.href = '/users'
        }
    }

    render() {
        const { employee, status, Title, Department } = this.state
        console.log(employee, 'employee')
        console.log(status, 'status')
        const doj = employee !== null && Object.keys(employee).length > 0 ? new Date(employee.DateOfJoining) : ''
        return (<Stack className="mt-70">
            <h2 className="editEmployeeText">Edit Employee Form</h2>
            {employee !== null ? (<Form className='w-75 mx-auto' onSubmit={this.handleSubmit} name="editEmployee">
            <Form.Group className="mb-3" controlId="FirstName" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" className="inputField" name="FirstName" placeholder="First Name" value={Object.keys(employee).length > 0 ? employee.FirstName : ''} readOnly disabled required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" className="inputField" name="LastName"  placeholder="Last Name" value={Object.keys(employee).length > 0 ? employee.LastName : ''} readOnly disabled required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" className="inputField" name="Age"  placeholder="Age" value={Object.keys(employee).length > 0 ? employee.Age : ''} readOnly disabled required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="DateOfJoining">
                    <Form.Label>Date Of Joining</Form.Label>
                    <Form.Control type="date" className="inputField" name="DateOfJoining"  placeholder="Date Of Joining" value={Object.keys(employee).length > 0 ? `${doj.getFullYear()}-${doj.getMonth().toString().length === 1 ? "0" + doj.getMonth() : doj.getMonth()}-${doj.getDate()}` : ''} readOnly required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Title">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Select name="Title" className="inputField"  value={Title} onChange={(event) => this.setState({ Title: event.target.value })} required>
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="Director">Director</option>
                        <option value="VP">VP</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Department">
                    <Form.Label>Department</Form.Label>
                    <Form.Select name="Department" className="inputField"  value={Department} onChange={(event) => this.setState({ Department: event.target.value })} required>
                        <option value="IT">IT</option>
                        <option value="Marketing">Marketing</option>
                        <option value="HR">HR</option>
                        <option value="Engineering">Engineering</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Department">
                    <Form.Label>Employee Type</Form.Label>
                    <Form.Select id="EmployeeType" className="inputField" name="EmployeeType" value={Object.keys(employee).length > 0 ? employee.EmployeeType : ''} disabled readOnly required>
                        <option value="FullTime">FullTime</option>
                        <option value="PartTime">PartTime</option>
                        <option value="Contract">Contract</option>
                        <option value="Seasonal">Seasonal</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Department">
                    <Form.Label>Current Status</Form.Label>
                    <Form.Check type="radio" name="currentStatus" id="currentStatus1" label="Working" checked={status} onChange={(event) => this.setState({ status: true })} />
                    <Form.Check type="radio" name="currentStatus" id="currentStatus2" label="Retired" checked={!status} onChange={(event) => this.setState({ status: false })} />
                </Form.Group>
                <Button type="submit" variant='primary'>Update</Button>
            </Form>)
            : <h2>No User Found !!!!</h2>}
        </Stack>)
    }
}

export default EmployeeEdit