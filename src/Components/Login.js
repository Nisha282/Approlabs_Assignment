import Google from "./LinkAcc";
import "./Login.css";
import { useState  } from "react";
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <div className="fullcontainer">
      <div className="logincontainer">
        <h1>Smile</h1>
        <h2>Welcome Back To Smile</h2>
        <br />

        <label>Email</label>
        <br /> 
        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        <br />
        <br/>
        <label>Password</label>
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <br/>
        <div className="check">
  <input type="checkbox"/>
  <label className="checklabel">Remember this device</label>
          <p class="forgot-password">Forgot password?</p>
          
          
        </div>
        <br />
        <button onClick={() => navigate('/Dashboard')} >Login</button>
        <br />
        <br />
        <div>
          <label>New here? Create a new account</label>
        </div><br/>

        <div className="or-container">
          <hr className="line" />
          <span className="text">Or sign in with </span>
          <hr className="line" />
        </div><br/>
        <Google/>
        <div className="gitButton">
          <button ><img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRa_9b4QRCp3A8G6_YdiUbDT-KUztMz0h6XJwqJ3t-rTs6mZTrqTOW6Y3w8t8aR9iCCvMO__VH-8&usqp=CAU&ec=48665701" width={30}/>GitHub</button>
        </div>
        <div>
          
           
        </div>
      </div>
    </div>
  );
}

export default Login;
