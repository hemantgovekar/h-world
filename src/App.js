import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users/Users';

import './App.css';
import Header from './components/Header/Header';
import Contact from './components/Contacts/Contact';
import About from './components/About/About';
import Posts from './components/Users/Posts';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/posts" component={Posts} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
