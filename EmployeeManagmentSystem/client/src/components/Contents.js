import React from 'react';
import {Routes, Route} from "react-router-dom";

import EmployeeDirectory from './EmployeeDirectory';
import EmployeeAdd from './EmployeeAdd';
import EmployeeFullDetails from './EmployeeFullDetails';
import EmployeeEdit from './EmployeeEdit';
import EmployeeDelete from './EmployeeDelete';


const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
    return (
        <Routes>  
            <Route exact path="/" element={<EmployeeDirectory/>} />
            <Route path="/users" element={<EmployeeDirectory/>} /> 
            <Route path="/adduser" element={<EmployeeAdd/>} />
            <Route path="/userdetails/:id" element={<EmployeeFullDetails/>} />
            <Route path="/editdetails/:id" element={<EmployeeEdit/>} />
            <Route path="/deletedetails/:id" element={<EmployeeDelete/>} />
            <Route path="/*" element={<NotFound/>} />                      
        </Routes>
    );
}