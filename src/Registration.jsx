import "./registration.css";

const Registration = () => {
    return ( <div className="registerContainer">

<div className="formControl">
        <h1 className="logoDesign">.bl<span>o</span>g</h1>

            <h2>Registration</h2>
    <form className="registerForm">


                <div className="flex1">
                <input type="text" name="" placeholder="First Name" />

                <input type="text" name="" placeholder="Last Name" />
                </div>

                <div className="flex1">
                <input type="date" name="" id="" placeholder="Date Of Birth"/>

                <input type="city" name="" id="" placeholder="City"/>
                </div>

        
                <input type="email" name=""  placeholder="Email"/>

                <input type="phone" name=""  placeholder="Phone"/>
            <div className="btn">
            <button className="submitForm">Submit</button>
            </div>
        </form>
        </div>
    </div> );
}
 
export default Registration;