
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import graphQLFetch from "./GraphQLFetch";

const EmployeeDelete = () => {
    let { id } = useParams();
    const [usermessage, updateusermessage] = useState('')

    useEffect(() => {
        loadData('', id);
    }, []);

    const deleteemployee = (_id) => {
        const query = `
        mutation deleteUserBasedOnId($_id: String!) {
            deleteUserBasedOnId(_id: $_id) {
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
                updateusermessage('Employee Deleted Successfully !!!')
            });

    }

    const loadData = (usertype, id) => {
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
        EmployeeData('http://localhost:4000/graphql', query, variable)
            .then(result => {
                const employees = result.data.employeeList;
                if(employees.find((emp) => emp.id ===  id).CurrentStatus === true) {
                    updateusermessage('Working Employee/Staff !!! Cannot be Deleted !!!')
                } else {
                    deleteemployee(id)
                }
                return null;
            })
    }

    const EmployeeData = async function (url = '', query = {}, variables) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables })
        });
        return response.json();
    }

    return (<div className="FullDetails mt-70">
        <h1>{usermessage}</h1>
    </div>)
}

export default EmployeeDelete