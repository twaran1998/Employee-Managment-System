import EmployeeDirectory from "./components/EmployeeDirectory";
import { Switch, Route, Redirect } from 'react-router-dom'

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
return (
    <Switch>
        <Redirect exact from="/" to="/users" />
        <Route path="/users" component={EmployeeDirectory} />
        <Route component={NotFound} />
    </Switch>
);
}