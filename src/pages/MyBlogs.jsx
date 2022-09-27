import { useNavigate } from "react-router-dom";
import NavBar from "../componets/Navbar";
import "./myblogs.css";


const MyBlobs = ({myBlogs}) => {

    const navigate = useNavigate();

    const createTags =(tags)=>{

        let resultTags = "|";

        tags.forEach((element, index) => {
            resultTags +=` ${element} |`;
            // if(index !== tags.length)
            // resultTags += "";

        });

        return resultTags;

    }

    const goToWriteBlog =(e)=>{
            e.preventDefault();
            navigate("/write_blog");

    }

    const getDate = (date) =>{
        
        let datePosted = new Date(date);

        let currDate = new Date();
        let diff = Math.abs(currDate-datePosted);
        const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24)); 

        return diffDays+" days ago";
    }

    if(myBlogs.length ===0){
        return (
            <>
            <NavBar />
            <h1 className="noBlogs">No Blogs Exits</h1>
            <button className="create-a-blog" onClick={goToWriteBlog}>Create a Blog</button>

            </>
        )
    }

    return ( <>
    <NavBar/>

    <div className="wrapper">

    <div className='wrapperBlog'>
        

        {   myBlogs ? (
                myBlogs.map((blogs)=>(

                    <div className="eachMyBlog" key={blogs._id}>
                    <img className="myBlogImg" src={blogs.imgUrl} alt="" srcset="" />
                     <div className="myTopic">{createTags(blogs.tags)}</div>
                     <h2 className="myTitle">{blogs.title}</h2>
                     <div className="myTopic"><i>{getDate(blogs.createdAt)}</i></div>
                     <div className="myContent">{blogs.content}</div>     
                </div>
                ))
        ): (
            <h1 className="nothingToDisplay">You have not publish anything yet</h1>
        )
        
        
        }
   
    </div>
    
    </div>
    </> );
}
 
export default MyBlobs;