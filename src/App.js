import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  );
};

export default App;
