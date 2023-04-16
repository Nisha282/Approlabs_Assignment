
import {BrowserRouter , Routes , Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import NavBar from "./Components/Navbar";
// import redux from "./Components/redux/index"

function App() {
  return (
    <div>
 
 <BrowserRouter>
      
     <Routes>
      <Route path = "/" element={< Login/>} />
      <Route path = "/dashboard" element={<Dashboard/>} />
      
     </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
