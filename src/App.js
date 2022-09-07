import {Route, Routes} from  'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBlobs from './pages/MyBlogs';
import WriteBlog from './pages/WriteBlog';
import Registration from './pages/Registration';

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
