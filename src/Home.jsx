
import NavBar from "./componets/Navbar";
import BlogBack from "./componets/BlobBack";
import "./home.css";
import Profile from "./componets/Profile";

const Home = () => {
    return ( <>
    <NavBar/>
    <BlogBack/>

    <div className="container">
    <div className='blog'>
        <div className="eachBlog">
            <img className="blogImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-plants-for-a-garden-1586987711.jpg?crop=0.670xw:1.00xh;0,0&resize=640:*" alt="" srcset="" />
             <div className="topic">Music | Life</div>
             <h2 className="title">Lorem ipsum dolor sit amet</h2>
             <div className="topic"><i>1 hour ago</i></div>
             <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iste vel 
                illum ipsa reprehenderit illo. 
                Veniam odio in, nemo repellendus aliquid accusantium illo recusandae? 
                Magni repudiandae libero numquam ullam at!</div>     
        </div>

        <div className="eachBlog">
            <img className="blogImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-plants-for-a-garden-1586987711.jpg?crop=0.670xw:1.00xh;0,0&resize=640:*" alt="" srcset="" />
             <div className="topic">Music | Life</div>
             <h2 className="title">Lorem ipsum dolor sit amet</h2>
             <div className="topic"><i>1 hour ago</i></div>
             <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iste vel 
                illum ipsa reprehenderit illo. 
                Veniam odio in, nemo repellendus aliquid accusantium illo recusandae? 
                Magni repudiandae libero numquam ullam at!</div>     
        </div>

        <div className="eachBlog">
            <img className="blogImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-plants-for-a-garden-1586987711.jpg?crop=0.670xw:1.00xh;0,0&resize=640:*" alt="" srcset="" />
             <div className="topic">Music | Life</div>
             <h2 className="title">Lorem ipsum dolor sit amet</h2>
             <div className="topic"><i>1 hour ago</i></div>
             <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iste vel 
                illum ipsa reprehenderit illo. 
                Veniam odio in, nemo repellendus aliquid accusantium illo recusandae? 
                Magni repudiandae libero numquam ullam at!</div>     
        </div>

        <div className="eachBlog">
            <img className="blogImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-plants-for-a-garden-1586987711.jpg?crop=0.670xw:1.00xh;0,0&resize=640:*" alt="" srcset="" />
             <div className="topic">Music | Life</div>
             <h2 className="title">Lorem ipsum dolor sit amet</h2>
             <div className="topic"><i>1 hour ago</i></div>
             <div className="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iste vel 
                illum ipsa reprehenderit illo. 
                Veniam odio in, nemo repellendus aliquid accusantium illo recusandae? 
                Magni repudiandae libero numquam ullam at!</div>     
        </div>
       
    </div>

    <div className="homeProfile">
        <Profile/>
    </div>

    </div>
    </> );
}
 
export default Home;