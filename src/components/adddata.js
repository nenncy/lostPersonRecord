import React, { Component , useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Container } from 'react-bootstrap';

const CreateData =()=> {
  const [newUser, setNewUser] = useState(
    {
        username: '',
        age: '',
        location: '',
        date:'',
        photo:''
    }
);
  
const handleChange = (e) => {
  setNewUser({...newUser, [e.target.name]: e.target.value});
}


 const onChangeDate=(date)=> {
    setNewUser({...newUser, date: date});
  }

const  onChangePhoto=(e)=>{
    setNewUser({...newUser, photo: e.target.files[0]});
  }

  const onSubmit=(e)=> {
    e.preventDefault();
    const formData = new FormData();

    formData.append('photo', newUser.photo);
    formData.append('age', newUser.age);
    formData.append('username', newUser.username);
    formData.append('location',newUser.location);
    formData.append('date',newUser.date);

    console.log(formData);

    axios.post('http://localhost:5000/data/add', formData)
      .then(res => console.log(res));

    window.location = '/';
  }

  

    return (
    <Container>
      <h3>Create New Log</h3>
      <form method="POST" onSubmit={onSubmit} encType='multipart/form-data'>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              name="username"
              className="form-control"
              value={newUser.username}
              onChange={handleChange}
              />
        </div>
        <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={onChangePhoto}
            />
        
        <div className="form-group"> 
          <label>Age </label>
          <input  type="text"
              required
              name="age"
              className="form-control"
              value={newUser.age}
              onChange={handleChange}
              />
        </div>
        <div className="form-group">
          <label>Location </label>
          <input 
              type="text" 
              name="location"
              className="form-control"
              value={newUser.location}
                onChange={handleChange}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
          <DatePicker
              selected={newUser.date}
              
              onChange={onChangeDate}
              dateFormat="yyyy/mm/dd"
               showYearDropdown
               showMonthDropdown
              scrollableYearDropdown
              scrollableMonthYearDropdown
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create List" className="btn btn-primary"  />
        </div>
      </form>
    </Container>
    )
  }





export default CreateData;