import EmployeeSearch from "./EmployeeSearch";
import EmployeeTable from "./EmployeeTable";
import EmployeeAdd from "./EmployeeAdd";

import { graphQLFetch } from '../../graphQLFetch'


class EmployeeDirectory extends React.Component {
    constructor() {
        super();
        this.state = { employees: [] }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        const query = `query {
        employeeList {
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
       this.EmployeeData('http://localhost:4000/graphql', query)
            .then(result => {
                this.setState({ employees: result.data.employeeList });
                return null;
            })
    }

    EmployeeData = async function (url = '', query) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });
        return response.json();
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
            alert('Employee Created Successfully!');
            // due to webpack not able to reload if manually reloaded we will be able to see the newly created user.
            // pagereloadfunction()
        }
    }


    render() {
        return (<div className="employeeContainer">
            <EmployeeSearch />
            <hr />
            <EmployeeTable employees={this.state.employees} />
            <hr />
            <EmployeeAdd createEmployee={this.createEmployee} />
        </div>)
    }
}

export default EmployeeDirectory