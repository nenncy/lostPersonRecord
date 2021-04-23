import React, { Component , useState } from 'react';
import axios from 'axios';


import { Container } from 'react-bootstrap';

const Responsedata =()=> {
  const [newUser, setNewUser] = useState(
    {
        
        msg:''
    }
);
  
const handleChange = (e) => {
  setNewUser({...newUser, [e.target.name]: e.target.value});
}


 

  const onSubmit=(e)=> {
    e.preventDefault();
    const formData = new FormData();

    formData.append('msg', newUser.msg);
    
    
    console.log(JSON.stringify(formData));

    axios.post('http://localhost:5000/response/addresponse', formData)
      .then(res => console.log(res));

      window.alert("response submitted!!")
  }

  

    return (
    <Container>
      <h3>Send Your Response</h3>
      <form method="POST" onSubmit={onSubmit} encType='multipart/form-data'>
        <div className="form-group"> 
          <label>Message</label>
          <input  type="text"
              required
              name="msg"
              className="form-control"
              value={newUser.msg}
              onChange={handleChange}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="submit" className="btn btn-primary"  />
        </div>
      </form>
    </Container>
    )
  }





export default Responsedata;