import EmployeeRow from "./EmployeeRow"

class EmployeeTable extends React.Component {
    render() {
        const EmployeeRows = this.props.employees.map(employee => <EmployeeRow key={employee.id} employee={employee} />)
        return (
            <table className="resultTable">
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