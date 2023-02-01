class EmployeeAdd extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        /*setTimeout(() => {
            const newIssue = {status: 'Assigned', owner: 'Person-C', title: 'Add New Issue'}
            this.props.createIssue(newIssue);
        }, 3000); */  
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.createEmployee;
        const employeeAge = parseInt(form.Age.value)
        if (employeeAge >= 20 && employeeAge <= 70) {
            const employee = {
                FirstName: form.FirstName.value,
                LastName: form.LastName.value,
                Age: parseInt(form.Age.value),
                DateOfJoining: form.DateOfJoining.value,
                Title: form.Title.value,
                Department: form.Department.value,
                EmployeeType: form.EmployeeType.value,
                CurrentStatus: form.currentStatus.value === "true" ? true : false
            }
            this.props.createEmployee(employee);
        } else {
            form.Age.value = "";
            alert("Invalid Age. Age Must be 20 and 70 !");
        }
    }

    render() {
        return (
            <form name="createEmployee" className="createEmployee" onSubmit={this.handleSubmit}>
                <input type="text" className="input" name="FirstName" id="FirstName" placeholder="First Name" required />
                <input type="text" className="input" name="LastName" id="LastName" placeholder="Last Name" required />
                <input type="text" className="input" name="Age" id="Age" placeholder="Age" required />
                <label>Joining Date</label>
                <input type="date" className="input" name="DateOfJoining" id="DateOfJoining" placeholder="Date Of Joining" required />
                <label>Job Title</label>
                <select name="Title" className="input" id="Title" required>
                    <option value="Employee">Employee</option>
                    <option value="Manager">Manager</option>
                    <option value="Director">Director</option>
                    <option value="VP">VP</option>
                </select>
                <label>Department</label>
                <select name="Department" className="input" id="Department" required>
                    <option value="IT">IT</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                </select>
                <label>Employee Type</label>
                <select id="EmployeeType" className="input" name="EmployeeType" required>
                    <option value="FullTime">FullTime</option>
                    <option value="PartTime">PartTime</option>
                    <option value="Contract">Contract</option>
                    <option value="Seasonal">Seasonal</option>
                </select>
                <label>Employee Status</label>
                <input type="radio" name="currentStatus" id="currentStatus1" value="true" defaultChecked />
                <label className="radiobtnText" htmlFor="currentStatus1">Working</label>
                <input type="radio" name="currentStatus" id="currentStatus2" value="false" />
                <label htmlFor="currentStatus2" className="radiobtnText">Retired</label>
                <button type="submit" className="createbtn">Create Employee</button>
            </form>
        )
    }
}

export default EmployeeAdd