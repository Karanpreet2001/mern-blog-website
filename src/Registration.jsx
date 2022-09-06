import "./registration.css";

const Registration = () => {
    return ( <div className="registerContainer">


        <form className="registerForm">
    <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" className="logoPic" alt="blog logo" />

            <h2>Registration</h2>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name=""  />

                <label htmlFor="lasttName">Last Name</label>
                <input type="text" name=""  />

                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <input type="date" name="" id="" />

                <label htmlFor="city">City</label>
                <input type="city" name="" id="" />

                <label htmlFor="email">Email</label>
                <input type="email" name=""  />

                <label htmlFor="Phone">Phone</label>
                <input type="phone" name=""  />

            <button className="submitForm">Submit</button>
        </form>
    </div> );
}
 
export default Registration;