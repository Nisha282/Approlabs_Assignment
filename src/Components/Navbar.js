import Nav from 'react-bootstrap/Nav';
import './Navbar.css';



//------------------------- important images---------------------------
import logo from './Images/logo.png'
import app from './Images/app.png';
import ecom from './Images/E-comm.jpeg';
import analyst from './Images/analytics.png';
import bank from './Images/Bank.png';
import book from './Images/booking.png';
import user from './Images/users.jpeg';
import shoping from './Images/shop.jpg';
import invoice from './Images/invoice.png';
import blog from './Images/blog.png';
import email from './Images/email.jpeg';
import chat from './Images/chat.png';
import cal from './Images/calandra.jpeg';
import kanban from './Images/kanban.png';
// -------------------------------------------------------




function NavBars() {
  return (
    <div className='fullnav'>
    <Nav className="flex-column">
     <img width={"50px"} src={logo}></img>
      <br/>
      <div className='profile-Admin' >
        <div>
        <img width="40px" src="data:image/jpeg;base64,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"></img>
</div>
<div>
  <h6>Nisha Sahu</h6>
  <p>Admin</p>
</div>
      </div><br/>
      <h6>GENERAL</h6>
      <Nav.Link  > <img width={50} src={app}></img>APP</Nav.Link>
      <Nav.Link ><img width={40} src={ecom}></img>E-commerce</Nav.Link>
      <Nav.Link ><img width={30} src={analyst}></img>Analytics</Nav.Link>
      <Nav.Link ><img width={50} src={bank}></img>Banking</Nav.Link>
      <Nav.Link ><img width={30} src={book}></img>Booking</Nav.Link>

      <h6>MANAGEMENT</h6>
      <Nav.Link  > <img width={40} src={user}></img>Users</Nav.Link>
      <Nav.Link  ><img width={30} src={shoping}></img> E-commerce</Nav.Link>
      <Nav.Link  ><img width={30} src={invoice}></img> Invoices</Nav.Link>
      <Nav.Link  ><img width={30} src={blog}></img> Blog</Nav.Link>


      <h6>APPS</h6>
      <Nav.Link> <img width={30} src={email}></img> Mail</Nav.Link>
      <Nav.Link><img width={30} src={chat}></img> Chat</Nav.Link>
      <Nav.Link><img width={30} src={cal}></img>  Calendar</Nav.Link>
      <Nav.Link><img width={30} src={kanban}></img>  Kanban</Nav.Link>
     
    </Nav>
    </div>
  );
}

export default NavBars;