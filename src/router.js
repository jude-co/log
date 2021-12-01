import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './screens/Login';
import Signup from './screens/Signup';


export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* <Route path="**" component={Login} /> */}
      </Switch>
    </Router>
  );
};