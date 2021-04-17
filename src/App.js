import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/home';
import CreateData from './components/adddata';
import CreateComplaint from './components/Complaints';

function App() {
  return (
  
      <Router>
       <>
      <Navbar />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/edit/:id" component={CreateData} />
      <Route path="/adddata" component={CreateData} />
      <Route path="/complaints" component={CreateComplaint}/>

      
      </>
    </Router>
      
    
  );
}

export default App;
