import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from './components/Navbar';
import Home from './components/home';
import CreateData from './components/adddata';
import CreateComplaint from './components/Complaints';


function App() {
  return (
  
      <Router>
      <React.Fragment>
      <Navbar />
      <br/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/edit/:id" component={CreateData} />
        <Route path="/adddata" component={CreateData} />
        <Route path="/complaints" component={CreateComplaint}/>
      </Switch>
      </React.Fragment>
    </Router>
      
    
  );
}

export default App;
