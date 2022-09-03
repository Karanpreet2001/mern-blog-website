import NavBar from "./componets/Navbar";
import "./myblogs.css";

const MyBlobs = () => {
    return ( <>
    <NavBar/>

    <div className="wrapper">

    <div className='wrapperBlog'>
        <div className="eachMyBlog">
            <img className="myBlogImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-plants-for-a-garden-1586987711.jpg?crop=0.670xw:1.00xh;0,0&resize=640:*" alt="" srcset="" />
             <div className="myTopic">Music | Life</div>
             <h2 className="myTitle">Lorem ipsum dolor sit amet</h2>
             <div className="myTopic"><i>1 hour ago</i></div>
             <div className="myContent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iste vel 
                illum ipsa reprehenderit illo. 
                Veniam odio in, nemo repellendus aliquid accusantium illo recusandae? 
                Magni repudiandae libero numquam ullam at!</div>     
        </div>

        <div className="eachMyBlog">
            <img className="myBlogImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-plants-for-a-garden-1586987711.jpg?crop=0.670xw:1.00xh;0,0&resize=640:*" alt="" srcset="" />
             <div className="myTopic">Music | Life</div>
             <h2 className="myTitle">Lorem ipsum dolor sit amet</h2>
             <div className="myTopic"><i>1 hour ago</i></div>
             <div className="myContent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iste vel 
                illum ipsa reprehenderit illo. 
                Veniam odio in, nemo repellendus aliquid accusantium illo recusandae? 
                Magni repudiandae libero numquam ullam at!</div>     
        </div>

        <div className="eachMyBlog">
            <img className="myBlogImg" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-plants-for-a-garden-1586987711.jpg?crop=0.670xw:1.00xh;0,0&resize=640:*" alt="" srcset="" />
             <div className="myTopic">Music | Life</div>
             <h2 className="myTitle">Lorem ipsum dolor sit amet</h2>
             <div className="myTopic"><i>1 hour ago</i></div>
             <div className="myContent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iste vel 
                illum ipsa reprehenderit illo. 
                Veniam odio in, nemo repellendus aliquid accusantium illo recusandae? 
                Magni repudiandae libero numquam ullam at!</div>     
        </div>

        
       
    </div>
    
    </div>
    </> );
}
 
export default MyBlobs;