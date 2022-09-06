import NavBar from "./componets/Navbar";
import "./writeblog.css";

const WriteBlog = () => {
    return ( 
        <>
        <NavBar/>

        <div className="writeBlogContainer">
            <div className="imgChoose">
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-online-plant-delivery-1638314748.jpg?crop=1.00xw:0.755xh;0,0.139xh&resize=1200:*" alt="" className="chooseAPhoto"/>
            </div>
            <from className="blogForm">


            <div className="formInput">
            <input type="text" name="title" placeholder="Title"/>
            </div>

            <div className="formInput">
            <select>
            <option disabled>Select a Topic</option>
                
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
    
            {/* <input type="text" name="desc" className="desc" placeholder="Description" /> */}
            <textarea placeholder="Add Description" cols="30" rows="10" className="desc"></textarea>            </div>
            <div className="newButton">
            <button className="submit">Post</button>
            </div>
            </from>
        </div>
        </>
     );
}
 
export default WriteBlog;