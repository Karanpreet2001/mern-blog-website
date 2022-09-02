
import "./profile.css";

const Profile = () => {
    return ( <>

    <div className="profileContainer">
        <div className="img">
        <img src="https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg"
         alt="Profile" className="profileImg" />
         </div>
         
         <div className="desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, cumque, at ipsa
          labore alias veritatis voluptatum facere tenetur beatae aut dolorum blanditiis. Recusandae eius 
         reiciendis ut reprehenderit fuga. Magni, deleniti.</div>

        <div className="category">Categories</div>
        <div className="allCategory">
            <div className="item">Life</div>
            <div className="item">Life</div>
            <div className="item">Life</div>
            <div className="item">Life</div>
            <div className="item">Life</div>
            <div className="item">Life</div>
        </div>

        
    </div>
    </> );
}
 
export default Profile;