require('./models/db')
const User = require('./models/employee')
const { UserInputError } = require('apollo-server-express');

function UserList(parent, { filtercriteria }, context, info) {
    if(filtercriteria) {        
        const users = User.find({ EmployeeType: filtercriteria })
        .then(users => {            
            return users;
        })
        .catch(error=>{
            res.json(error)
        })  
    return users;
    } else {        
        const users = User.find({})
        .then(users => {            
            return users;
        })
        .catch(error=>{
            res.json(error)
        })  
        return users;
    }
       
}

async function createUser(_, {employee}) {
    validateEmployee(employee);
    await User.create(employee, (error) => { console.log(error); })
    return employee;
}

function validateEmployee(employee) {
    const errors = [];
    if ((employee.Age >= 20 && employee.Age <= 70) === false) {
        errors.push('Field "Age" must be between 20 and 70') // graphql validation for age must be between 20 and 70
    }

    if (errors.length > 0) {
        throw new UserInputError('Invalid input(s)', { errors });
    }
}


async function SingleUser(_, { _id }) {
    const user = await User.findById({_id})
    return user;
}

async function updateUser(_, {newuser}) {
  const updateduser = await User.findOneAndUpdate({_id: newuser.id}, {
        Title: newuser.title,
        Department: newuser.department,
        CurrentStatus: newuser.currentstatus
    }).then(updateduser => {
        return updateduser;
    }).catch(error => {
        return false;
    })
    return updateduser
}

async function deleteUser(_, { _id }) {
    const deleteresponse = User.deleteOne({ _id: _id }).then((employeeresult) => { 
        return employeeresult 
    })
    return deleteresponse
}



module.exports = { UserList, createUser, SingleUser, updateUser, deleteUser } 