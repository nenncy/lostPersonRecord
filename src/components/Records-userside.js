import React, { useEffect, useState } from 'react'
import './cards/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container ,Row,Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { getSuggestedQuery } from '@testing-library/dom';
import Moment from 'react-moment';
import { Link, useParams } from 'react-router-dom';
import 'moment-timezone';

import axios from 'axios';
const mystyle = {
  color: "black",
  backgroundColor: "white",
  padding: "10px",
  fontFamily: "Arial",
  textAlign:"center",
  fontSize:"2em"
};


const Records = () => {

  const [newUser, setNewUser] = useState(
    {
        msg: '',
        
    }
);
   

  const [user, setUsers] = useState([])

   const getUser = async ()=>{
       const response= await fetch('http://localhost:5000/data');
      
      setUsers( await response.json());
      
      
      
   }
   useEffect(() => {
      getUser();
  }, []);

  
   
   return (
    <>
    <h1 style={mystyle}>Records</h1>
    <div className="container-fluid " >
   <div className="row text-center">
    <div className="cards-container">
      {
          user.map((CurElem) => {
            return(
              <Row className="content">
                
               <div className="col-10 col-md-4 mt-5" key={CurElem._id}>
                 <div className="col-md-6 mb-3">
              <Card style={{ width: '18rem', backgroundColor:"white"}} className="d-flex align-items-center">
              <Card.Img variant="top" src={CurElem.photo} />
              <Card.Body>
              
              <Card.Text style={{textAlign:"center",fontFamily:"sans-serif"}}> {CurElem.username}</Card.Text>
              
            <Card.Title>{CurElem.age}</Card.Title>
            <Card.Text>
             {CurElem.location}
 
            </Card.Text>
            <Card.Text>
            <Moment format="YYYY/MM/DD"> 
             {CurElem.date}
             </Moment>
             
            </Card.Text>
           
            </Card.Body>
            <Card.Text>
            
            <form method="POST"  encType='multipart/form-data'>
            <Link to="/response" className="btn btn-primary"> Add Response</Link>
            
            </form>
             
            
            </Card.Text>
            
           </Card>
            </div>
            
            </div>
            
          <br/>
          </Row>
        
       
            )
          })
 
      }   
        </div>
       </div>
       </div>   
       </>
   
   )
}
 export default Records;