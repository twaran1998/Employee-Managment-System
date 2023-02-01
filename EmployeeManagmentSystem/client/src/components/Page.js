import { BrowserRouter as Router } from "react-router-dom";
import Contents from "./Contents";
import EmployeeNavBar from "./EmployeeNavBar";

function Page() {
    return (
        <Router>
            <div>
                <EmployeeNavBar />
                <Contents />
            </div>
        </Router>
    );
}

export default Page