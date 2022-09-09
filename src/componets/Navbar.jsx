import "./navbar.css";
import {Link} from "react-router-dom";
import Home from  "../pages/Home"

const NavBar = () => {
    const user = true;

    return ( <>
    <div className="header">
        <div className="logo">
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" className="logoPic" alt="blog logo" />
        </div>

        <nav className="linkList">
            <li><Link to = "/"  className="linkList-pointer">Blogs</Link></li>
            <li><Link to = "/myblogs"  className="linkList-pointer">My Blogs</Link></li>
            <li><Link to = "/contact" className="linkList-pointer">Contact</Link></li>
            <li><Link to = "/write_blog" className="linkList-pointer">Write</Link></li>
            <li><Link to = "/login" className="linkList-pointer">{user && "Logout"}</Link></li>

        </nav>

        <div className="profilePic">
            {
                user
                ?
            <img src="https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg" className="profile" alt="blog logo" />
                :
                <Link className="linkList-pointer" to="/login">Login</Link>
            }
        </div>

    </div>
    </> );
}
 
export default NavBar;