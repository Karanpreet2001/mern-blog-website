import NavBar from "../componets/Navbar";
import "./writeblog.css";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const WriteBlog = () => {

    const [file, setFile] = useState("");

    return ( 
        <>
        <NavBar/>
        {
    console.log(file)
        }

        <div className="writeBlogContainer">
            <img src={
                file? URL.createObjectURL(file)
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmZMTMMR7GtKQOU5Zl_pvsHblRx1jAULse7w&usqp=CAU"

            } alt="" className="writeImg" />

            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <AddIcon className ="icon"/>
                        </label>
                    <input type="file" id="fileInput" name="" onChange={(e)=> setFile(e.target.files[0])} style={{display:"none"}} />
                    <input type="text" name="" id="" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea name="" id="" placeholder="Tell your story..." className="writeInput writeText" ></textarea>
                </div>
            <div className="btnWriteSubmit">
            <button className="writeSubmit">Publish</button>

            </div>

            </form>
        </div>
      
        </>
     );
}
 

export default WriteBlog;