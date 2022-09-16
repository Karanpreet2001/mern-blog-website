import "./registration.css";
import {useState} from "react";

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

const Registration = () => {
    
    const [firstName, setFirstName] = useInput("");
    const [lastName , setLastName] = useInput("");
    const [ date, setDate] = useInput("");
    const [email, setEmail] = useInput("");
    const [city, setCity] = useInput("");
    const [phone , setPhone] = useInput("");
    const [ password, setPassword] = useInput("");

    const onSubmitForm = (e) =>{
        e.preventDefault();

        console.log(firstName);
    }


    return ( <div className="registerContainer">

<div className="formControl">
        <h1 className="logoDesign">.bl<span>o</span>g</h1>

            <h2>Registration</h2>
    <form className="registerForm" onSubmit={onSubmitForm}>


                <div className="flex1">
                <input type="text" {...firstName} placeholder="First Name" />

                <input type="text" {...lastName} placeholder="Last Name" />
                </div>

                <div className="flex1">
                <input type="date" {...date} placeholder="Date Of Birth"/>

                <input type="city" {...city} placeholder="City"/>
                </div>

                <input type="phone" {...phone}  placeholder="Phone"/>
                <input type="email" {...email}  placeholder="Email"/>
                <input type="password" {...password}  placeholder="Password"/>

            <div className="btn">
            <button className="submitForm">Submit</button>
            </div>
        </form>
        </div>
    </div> );
}
 
export default Registration;