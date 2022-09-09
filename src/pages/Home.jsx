
import NavBar from "../componets/Navbar";
import BlogBack from "../componets/BlobBack";
import "./home.css";
import Profile from "../componets/Profile";

const Home = ({allBlogs}) => {

    const createTags =(tags)=>{

        let resultTags = "|";

        tags.forEach((element, index) => {
            resultTags +=` ${element} |`;
            // if(index !== tags.length)
            // resultTags += "";

        });

        return resultTags;

    }

    return ( <>
    <NavBar/>
    <BlogBack/>

    <div className="container">
    <div className='blog'>
        {
            allBlogs.map((blogs)=>(
                <div className="eachBlog" key = {blogs._id}>
            <img className="blogImg" src={blogs.imgUrl} alt="" srcset="" />
             <div className="topic">{createTags(blogs.tags)}</div>
             <h2 className="title">{blogs.title}</h2>
             <div className="topic"><i>1 hour ago</i></div>
             <div className="content">{blogs.content}</div>     
        </div>
            ))
        }
        
    </div>

    <div className="homeProfile">
        <Profile/>
    </div>

    </div>
    </> );
}
 
export default Home;