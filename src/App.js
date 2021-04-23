import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from './components/Navbar';
import Home from './components/home';
import CreateData from './components/adddata';
import EditData from './components/edit-data';
import CreateComplaint from './components/Complaints';
import ViewComplaint from './components/viewcomplaints';
import Records from './components/Records-userside';
import Responsedata from './components/response-form';


function App() {
  return (
  
      <Router>
      <React.Fragment>
      <Navbar />
      <br/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/edit/:id" component={EditData} />
        <Route path="/adddata" component={CreateData} />
        <Route path="/complaints" component={CreateComplaint}/>
        <Route path="/viewcomplaints" component={ViewComplaint}/>
        <Route path="/records" component={Records}/>
        <Route path="/response" component={Responsedata}/>

      </Switch>
      </React.Fragment>
    </Router>
      
    
  );
}

export default App;
