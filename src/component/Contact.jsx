import React from 'react';
import './Login.css';
import Header from './Header';
import Footer from './Footer';
import {useState} from 'react';
import {submitUser} from '../api';

function Contact() {
    const [name,setEmail]=useState("");
    const [age,setPass]=useState("");

    const handleEmail=(e)=>{
        setEmail(e.target.value);
    };

    const handlePass=(e)=>{
        setPass(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        submitUser({name,age});
        console.log(name,age);
    }
    return (
      <>
      <Header/>
        <form className="loginform">
            <h1 classname="head">Contact</h1>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" onChange={(e)=>handleEmail(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Message</label>
    <input type="text" name="password" onChange={(e)=>handlePass(e)} className="form-control" id="exampleInputPassword1" placeholder="Message"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={(e)=>handleSubmit(e)} className="btn btn-primary">Submit</button>
</form>
<Footer/>
</>
  )
}

export default Contact;