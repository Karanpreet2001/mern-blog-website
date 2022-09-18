
import "./login.css";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Home from "./Home";

function useInput(initialValue){

  const [value, setValue] = useState(initialValue);
 

  return [
      {
      value,
      onChange : (e)=> setValue(e.target.value)
      },
      ()=>setValue(initialValue)
  ]
}
  

const Login = ({childToParent}) => {

  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const navigate = useNavigate();


 

  const checkUser = async () =>{
    
    
    const userLogin={
      email: email.value,
      password: password.value
    }

     const {data} = await axios.post("http://localhost:5000/api/userLogin",userLogin)
     console.log(data, userLogin.email);
     if(data === email.value){
      // navigate("/", {state: userLogin.email});
      const response = {
        isResponse: true,
        email: userLogin.email
      }
      childToParent(response);
     }else{
      console.log("false");
     }

     
    
  }

    return ( 
      <>
   
       <div className="loginContainer">

        <div className="loginWrapper">
          <div className="left">
            <img src="https://imgproxy.epicpxls.com/T7k2hEx90MqoeCLHKyb3BuZZPwylMqDmc22fDd0R7T0/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by8wNmRlZTA2/YTY0ZDIzZDMzOGJj/OWY3ZjU4ZmI1NDRm/ZA.jpg"
             alt="person using comp" className="leftImage"/>
          </div>

          <div className="right">
        <h1 className="logoDesign">.bl<span>o</span>g</h1>
        <form className="rightform" >
            <input type="text" {...email}  className="login-username" placeholder="Username" />
            <input type="password" {... password} name="" className="login-password" placeholder="Password" />
            <submit className="submit-login-form" onClick={checkUser}>Submit</submit>
            <submit className="submit-login-form writeregister"><Link to="/register" style={{textDecoration: "none", color: "white"}} >Register</Link></submit>

            </form>

          </div>
        </div>
       </div> 

       </>
     );
}
 
export default Login;