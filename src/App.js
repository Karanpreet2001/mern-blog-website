import {Route, Routes} from  'react-router-dom';

import NavBar from './componets/Navbar';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    
    <div>

      <Routes>
        <Route path='/'>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/login" element={<Login/>}/>
          {/* <Route path= "/" element={<Home/>}/>
          <Route path= "/" element={<Home/>}/> */}

        </Route>

      </Routes>
  
    </div>
  
    
  );
}

export default App;
