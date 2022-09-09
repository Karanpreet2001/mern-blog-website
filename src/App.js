import {Route, Routes} from  'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBlobs from './pages/MyBlogs';
import WriteBlog from './pages/WriteBlog';
import Registration from './pages/Registration';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:5000/api/allblogs")
         .then(response=>{setAllBlogs(response.data); 
                console.log(response.data)})
          .catch(err=>{
            console.log(err);
          });

  }, []);

  const user = true;

  return (
    
    <div>

      <Routes>
        <Route path="/">
          <Route path= "/" element={user ? <Home allBlogs={allBlogs} />: <Login/>}/>
          <Route path= "/login" element={user ? <Home allBlogs={allBlogs}/>:<Login/>}/>
          <Route path= "/myblogs" element={user ? <MyBlobs/>: <Login/>}/>
          <Route path= "/write_blog" element={user ? <WriteBlog/>: <Login/>}/>
          <Route path= "/register" element={user ?<Home allBlogs={allBlogs}/>: <Registration/>}/>
        </Route>
       

      </Routes>
  
    </div>
  
    
  );
}

export default App;
