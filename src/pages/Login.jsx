import "./login.css"
const Login = () => {
    return ( 
       <div className="loginContainer">

        <div className="wrapper">
          <div className="left">
            <img src="https://imgproxy.epicpxls.com/T7k2hEx90MqoeCLHKyb3BuZZPwylMqDmc22fDd0R7T0/rs:fill:800:600:0/g:no/aHR0cHM6Ly9pdGVt/cy5lcGljcHhscy5j/b20vdXBsb2Fkcy9w/aG90by8wNmRlZTA2/YTY0ZDIzZDMzOGJj/OWY3ZjU4ZmI1NDRm/ZA.jpg"
             alt="person using comp" className="leftImage"/>
          </div>

          <div className="right">
        <h1 className="logoDesign">.bl<span>o</span>g</h1>

            <input type="text" name=""  className="login-username" placeholder="Username"/>
            <input type="password" name="" className="login-password" placeholder="Password"/>
            <submit className="submit-login-form">Submit</submit>
          </div>
        </div>
       </div> 
     );
}
 
export default Login;