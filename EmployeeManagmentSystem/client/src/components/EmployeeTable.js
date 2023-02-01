import React from "react"
import EmployeeRow from "./EmployeeRow"

class EmployeeTable extends React.Component {
    render() {
        const EmployeeRows = this.props.employees.map(employee => <EmployeeRow key={employee.id} employee={employee} />)
        return (
            <table className="table table-striped table-dark mx-auto w-100">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Age</th>
                        <th>Date Of Joining</th>
                        <th>Title</th>
                        <th>Department</th>
                        <th>EmployeeType</th>
                        <th>Current Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {EmployeeRows}
                </tbody>
            </table>
        )
    }
}

export default EmployeeTable