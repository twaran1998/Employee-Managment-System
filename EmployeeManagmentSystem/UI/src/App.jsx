import Page from './components/Page';
import { BrowserRouter as Router } from 'react-router-dom'

const element = (<Router>
    <Page />
</Router>)
ReactDOM.render(element, document.getElementById('root'));