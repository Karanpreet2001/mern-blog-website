import "./blogback.css";
import BlogImg from "../img/BlogPic.jpg";

const BlobBack = () => {
    return ( <>
    <div className="main">

        <div className="mainHeading">
            <div className="react">React & Node</div>
            <div className="blogName">Blog</div>
        </div>
        <img src={BlogImg}
         alt="blog" className="mainImage" />
    </div>
    </> );
}
 
export default BlobBack;