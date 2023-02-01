
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import graphQLFetch from "./GraphQLFetch";
import moment from 'moment'
import { countdown } from './supercountdown'

const EmployeeFullDetails = () => {
    let { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        getEmployee(id);
    }, []);

    const getEmployee = (_id) => {
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
        graphQLFetch(query, { _id })
            .then(function (data) {
                setEmployee(getRetirementSoonDetails(data.singleUser));
            });

    }

    const getRetirementSoonDetails = (emp) => {
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

    console.log(employee)
    return (<div className="FullDetails mt-70">
        {employee !== null ? (<div className="card w-75 mx-auto">
            <img className="card-img-top imgprofile" src="/employeebanner.jpg" alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{employee.FirstName +'  ' + employee.LastName}</h5>
                <p className="card-text"><b>Date Of Joining</b> - {moment(employee.DateOfJoining).format('DD-MM-YYYY')}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Age</b> - {employee.Age}</li>
                <li className="list-group-item"><b>Department</b> - {employee.Department}</li>
                <li className="list-group-item"><b>Employement Type</b> - {employee.EmployeeType}</li>
                <li className="list-group-item"><b>Retirement Summary</b> - {employee.RetirementSummary}</li>
                <li className="list-group-item"><b>Title</b> - {employee.Title}</li>
                <li className="list-group-item"><b>Current Status</b> {employee.CurrentStatus === true ? <div className="alert alert-success w-25 mx-auto my-1">Active</div> : <div className="alert alert-danger w-25 mx-auto my-1">In Active</div>}</li>
            </ul>
            <div className="card-body">
                <a href={`/editdetails/${employee.id}`} className="card-link">Update Employee</a>
            </div>
        </div>) : <h1>No Employee Found !!!</h1>}

    </div>)
}

export default EmployeeFullDetails