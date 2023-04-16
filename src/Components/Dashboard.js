
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavBars from "./Navbar";

import './Dashboard.css'

import userlogo from './Images/users.jpeg'
import npb from './Images/npb.png'
import flag from './Images/language.png'
import userimg from './Images/userimg.jpg'
import income from './Images/income.jpg';
import expenses from './Images/expenses.jpg';
import master from './Images/masterCard.jpg';
import chart from './Images/income_Chart.jpg';
import quicktran from './Images/quickTran.jpg';
import piechar from './Images/piechart.png';
import contact from './Images/contact.jpg';
import refer from './Images/refer&earn.jpg';

import News from './News';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './Store';


  

function Dashboard() {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
  }

  function LogoutNavigate() {
    navigate('/');
  }

  return (
    <div className='fullDashbord'>
      <div className='vartical-nav'>
      <NavBars />
      </div>
      <div>
        <div className='sidenav'>
          <Navbar>
            <Container>
              <Navbar.Brand><img width="20px" src='https://cdn-icons-png.flaticon.com/512/3917/3917754.png' /></Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <div className='navirightcontnt'>
                  
                <img width="20px" src={flag} />
                <img width="20px" src={npb} />
                <img width="30px" src={userlogo} />
                <img width="40px" src={userimg} />
                <button onClick={()=>{ handleLogout(); LogoutNavigate();}}>Logout</button>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>

        <div className='cards'>
          <img width={"25%"} src={income}/>
          <img width={"25%"} src={expenses}/>
          <img width={"35%"} src={master}/>
        </div><br/>

        <div className='sheet'>
         <img width={"70%"} src={chart}/>
          <img width={"28%"} height={"425px"} src={quicktran}/>
        </div> <br/>

        <div className='piechart'>
          <img width={"60%"} src={piechar}/>
          <img width={"32%"} height={"500px"} src={contact} />
        </div>

        <div className='table-img'>
         <News/>
          <div className='refer-img'>
          <img width={"320px"} height={"400px"} src={refer}/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;