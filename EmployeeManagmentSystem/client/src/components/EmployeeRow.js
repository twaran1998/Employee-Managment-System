import React from "react";

class EmployeeRow extends React.Component {
    formatDate = (jsDate) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return jsDate.toLocaleDateString("en-US", options)
    }


    render() {
        const employee = this.props.employee;
        return (
            <tr>
                <td>{employee.FirstName}</td>
                <td>{employee.LastName}</td>
                <td>{employee.Age}</td>
                <td>{this.formatDate(new Date(employee.DateOfJoining))}</td>
                <td>{employee.Title}</td>
                <td>{employee.Department}</td>
                <td>{employee.EmployeeType}</td>
                <td>{employee.CurrentStatus === true ? "1" : "0"}</td>
                <td><a href={`/userdetails/${employee.id}`} className="btn btn-primary w-100 my-2">Click Here To View Details</a>
                    <a href={`/editdetails/${employee.id}`} className="btn btn-success w-100 my-2">Click Here To Update Details</a>
                    <a href={`/deletedetails/${employee.id}`} className="btn btn-danger w-100 my-2">Click Here To Delete</a>
                </td>
            </tr>
        )
    }
}

export default EmployeeRow