import NavBar from "../componets/Navbar";
import "./writeblog.css";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


function useInput (initailValue){

    const [value, setValue] = useState(initailValue);

    return [
        {
            value,
            onChange: (e)=> setValue(e.target.value)
        },
        ()=>setValue(initailValue)

    ];

}


const WriteBlog = () => {


    const [title, setTitle] = useInput("");
    const [url, setUrl] = useInput("");
    const [location, setLocation] = useInput("");
    const [content, setContent] = useInput("");

    const [msg, setMsg] = useState("")

    const publishBlog = (e) =>{
        e.preventDefault();

        if(title.value==="" || 
             url.value==="" ||
             location.value==="" ||
             content.value==="" ){

                setMsg("Please fill all the fields")
             }else{
                console.log(title.value);
             }
        
    }


    return ( 
        <>
        <NavBar/>
       

        <div className="writeBlogContainer">
            <img src={
             
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZMTMMR7GtKQOU5Zl_pvsHblRx1jAULse7w&usqp=CAU"

            } alt="" className="writeImg" />

            <form className="writeForm">
                <div className="writeFormGroup">
                    {/* <label htmlFor="fileInput">
                        <AddIcon className ="icon"/>
                        </label>
                    <input type="file" id="fileInput" name="" onChange={(e)=> setFile(e.target.files[0])} style={{display:"none"}} /> */}
                    <input type="text" {...title} placeholder="Title" className="writeInput" autoFocus={true} required/>
                    <input type="text" {...url} placeholder="Add URL" className="writeInput "  required/>
                    <input type="text" {...location} placeholder="Location" className="writeInput" required/>

                </div>
                <div className="writeFormGroup">
                    <textarea {...content} placeholder="Tell your story..." className="writeInput writeText" required ></textarea>
                </div>
                <h3>{msg}</h3>
            <div className="btnWriteSubmit">
            <button className="writeSubmit" onClick={publishBlog}>Publish</button>

            </div>

            </form>
        </div>
      
        </>
     );
}
 

export default WriteBlog;