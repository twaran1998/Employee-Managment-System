import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom";

class EmployeeFilter extends React.Component {
    render() {
        return (<div className="EmployeeFilter"> 
            <div className="py-2">
                <a className="alert alert-primary mr-3" href="/users">All Employees</a>
                <a className="alert alert-primary mr-3" href="/users?usertype=FullTime">Full Time Employees</a>
                <a className="alert alert-primary mr-3" href="/users?usertype=PartTime">Part Time Employees</a>
                <a className="alert alert-primary mr-3" href="/users?usertype=Contract">Contract Employees</a>
                <a className="alert alert-primary mr-3" href="/users?usertype=Seasonal">Seasonal Employees</a>
            </div>
        </div>
        )
    }
}

export default EmployeeFilter
