import NavBar from "./componets/Navbar";
import "./writeblog.css";

const WriteBlog = () => {
    return ( 
        <>
        <NavBar/>

        <div>
            <div>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-online-plant-delivery-1638314748.jpg?crop=1.00xw:0.755xh;0,0.139xh&resize=1200:*" alt="" srcset="" />
            </div>
            <from className="blogForm">


            <div className="formInput">
            <label htmlFor="title">Title</label>    
            <input type="text" name="title" />
            </div>

            <div className="formInput">
            <label htmlFor="topic">Topic</label>    
            <select>
                <option>Music|Life</option>
                <option>Style</option>
                <option>Cinema</option>
                <option>Sports</option>
                <option>Health</option>
                <option>News</option>
                <option>Medicines</option>
                <option>Technology|IT</option>
            </select>
            </div>

            <div className="formInput">
            <label htmlFor="desc">Description</label>    
            <input type="text" name="desc" />
            </div>
            </from>
        </div>
        </>
     );
}
 
export default WriteBlog;