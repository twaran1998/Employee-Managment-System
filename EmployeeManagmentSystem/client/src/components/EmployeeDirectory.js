import React from "react";
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import moment from 'moment'
import  { countdown } from './supercountdown'
import EmployeeFilter from "./EmployeeFilter";
import EmployeeTable from "./EmployeeTable";


class EmployeeDirectory extends React.Component {
    constructor() {
        super();
        this.state = { employees: [] }
    }

    componentDidMount() {
        let params = window.location.search;
        let queryParams = new URLSearchParams(params);
        let owner = queryParams.get("usertype")
        console.log(owner)
        this.loadData(owner);
    }

    loadData(usertype) {
        const query = `query employeeList($filtercriteria: String){
        employeeList(filtercriteria: $filtercriteria) {
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

        let variable = { filtercriteria: usertype }
        this.EmployeeData('http://localhost:4000/graphql', query, variable)
            .then(result => {
                this.setState({ employees: result.data.employeeList.map((newemployee) => this.getRetirementSoonDetails(newemployee)) });
                return null;
            })
    }

    EmployeeData = async function (url = '', query = {}, variables) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables })
        });
        return response.json();
    }

     getRetirementSoonDetails = (emp) => {
        var soonretirement = false;
        var retirementDetailsString = ''
        if (emp.CurrentStatus === true) {
            var tDate = moment();
            var jDate = moment(emp.DateOfJoining)
            var dyears = tDate.diff(jDate, 'years')
            var Age = emp.Age + dyears
            var RemainingTime = 65 - Age // Retirement Age Set to 65
            var DtOne = jDate.add(dyears, 'years')
            var DtTwo = DtOne.add(RemainingTime, 'years')
            var ExactRetirementDate = countdown(new Date(), new Date(DtTwo.toLocaleString()))
            soonretirement = parseInt(ExactRetirementDate.months) <= 6 && parseInt(ExactRetirementDate.years) === 0 // Retirement Upcoming Months Set to 65
            retirementDetailsString = ExactRetirementDate.days +' Days '+ExactRetirementDate.months+' Months, '+ ExactRetirementDate.years +' Years'
        }
        return {
            IsSoonRetirement: soonretirement,
            RetirementSummary: retirementDetailsString,
            ...emp
        }
    }




    render() {
        console.log(this.state.employees)
        const retieringsoonemployees = this.state.employees.filter((emp) => emp.IsSoonRetirement === true)
        return (<div className="employeeContainer">
            <EmployeeFilter />
            <hr />
            <a href={`/adduser`} className="btn btn-primary w-25 my-2 mx-auto">Add New Employee</a>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first" className="w-100">General Employees</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="w-100">
                                <Nav.Link eventKey="second" className="w-100">Retiring Soon Employees</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <EmployeeTable employees={this.state.employees} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <EmployeeTable employees={retieringsoonemployees} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>)
    }
}

export default EmployeeDirectory