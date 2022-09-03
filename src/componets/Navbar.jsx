import "./navbar.css";

const NavBar = () => {
    return ( <>
    <div className="header">
        <div className="logo">
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" className="logoPic" alt="blog logo" />
        </div>

        <nav className="linkList">
            <li><a href="#" className="linkList-pointer">Blogs</a></li>
            <li><a href="#" className="linkList-pointer">My Blogs</a></li>
            <li><a href="#" className="linkList-pointer">Contact</a></li>
            <li><a href="#" className="linkList-pointer">Write</a></li>
            <li><a href="#" className="linkList-pointer">Logout</a></li>

        </nav>

        <div className="profilePic">
            <img src="https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg" className="profile" alt="blog logo" />
        </div>

    </div>
    </> );
}
 
export default NavBar;