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
            </tr>
        )
    }
}

export default EmployeeRow