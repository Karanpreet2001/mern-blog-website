import {Route, Routes} from  'react-router-dom';

import NavBar from './componets/Navbar';
import Login from './Login';
import Home from './Home';
import MyBlobs from './MyBlogs';
import WriteBlog from './WriteBlog';
import Registration from './Registration';

function App() {
  return (
    
    <div>

      <Routes>
        <Route path='/'>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/login" element={<Login/>}/>
          <Route path= "/myblogs" element={<MyBlobs/>}/>
          <Route path= "/write_blog" element={<WriteBlog/>}/>
          <Route path= "/register" element={<Registration/>}/>


        </Route>

      </Routes>
  
    </div>
  
    
  );
}

export default App;
