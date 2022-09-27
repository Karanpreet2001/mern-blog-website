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
  const [myBlogs, setMyBlogs] =useState([]);
  const [user, setUser] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const childToParent = (childdata) => {
    console.log(childdata);
    setUser(childdata.isResponse);
    setUserEmail(childdata.email);
  
  }

  console.log(userEmail);

  
  

  

  useEffect(()=>{

    axios.get("http://localhost:5000/api/allblogs")
         .then(response=>{setAllBlogs(response.data); 
                console.log(response.data)})
          .catch(err=>{
            console.log(err);
          });

  }, []);

  useEffect(()=>{

    axios.get("http://localhost:5000/api/myBlogs/"+userEmail)
          .then(response => {setMyBlogs(response.data);
               console.log(response.data)})
          .catch(err=>console.log(err));
  },[]);



  return (
    
    <div>

      <Routes>
        <Route path="/">
          <Route path= "/" element={user ? <Home allBlogs={allBlogs} />: <Login childToParent={childToParent}/>}/>
          <Route path= "/login" element={user ? <Home allBlogs={allBlogs}/>:<Login childToParent={childToParent}/>}/>
          <Route path= "/myblogs" element={user ? <MyBlobs myBlogs = {myBlogs}/>: <Login childToParent={childToParent}/>}/>
          <Route path= "/write_blog" element={user ? <WriteBlog/>: <Login childToParent={childToParent}/>}/>
          <Route path= "/register" element={user ?<Home allBlogs={allBlogs}/>: <Registration/>}/>
        </Route>
       

      </Routes>
  
    </div>
  
    
  );
}

export default App;
