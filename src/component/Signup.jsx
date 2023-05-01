import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import './Signup.css';

function Signup() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  const [cpassword,setCpassword]=useState("");

  const handleName=(e)=>{
      setName(e.target.value);
  };
  const handleEmail=(e)=>{
    setEmail(e.target.value);
};
const handlePassword=(e)=>{
  setpassword(e.target.value);
};
const handleCpassword=(e)=>{
  setCpassword(e.target.value);
};

  const handleSubmit=(e)=>{
      e.preventDefault();
      check();
      // submitUser({name,email,password,cpassword});
      console.log(name,email,password,cpassword);
      
     
  }
  function check()
  {
    if(password!==cpassword)
        alert("please fill correct password");
  }
  return (
    <>
    <Header/>
    <form className="signup">
        <h1>Sign Up</h1>

  <div className="form-row">
  <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Name</label>
      <input type="text" onChange={(e)=>handleName(e)} className="form-control" id="inputEmail4" placeholder="Name" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4">Email</label>
      <input type="email" onChange={(e)=>handleEmail(e)} className="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" onChange={(e)=>handlePassword(e)} className="form-control" id="inputPassword4" placeholder="Password" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Confirm Password</label>
      <input type="password" onChange={(e)=>handleCpassword(e)} className="form-control" id="inputPassword4" placeholder="Confirm Password" />
    </div>
  </div>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Sign in</button>
</form>
<Footer/>
    </>
  )
}

export default Signup