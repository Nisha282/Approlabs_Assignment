
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavBars from "./Navbar";

import income from './Images/income.jpg';
import expenses from './Images/expenses.jpg';
import master from './Images/masterCard.jpg';
import chart from './Images/income_Chart.jpg';
import quicktran from './Images/quickTran.jpg';
import piechar from './Images/piechart.png';

function Dashboard() {
  return (
    <div>
      <NavBars />
      <div className='sidenav'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      </div>

      <div className='cards'> 
      <img width={"20%"} src={income}></img>
<img width={"20%"}src={expenses}></img>
<img width={"30%"}src={master}></img>
      </div>

      <div>
      <img width={"60%"}src={chart}></img>
      <img width={"25%"}src={quicktran}></img>
      </div>

      <div>
      <img width={"40%"}src={piechar}></img>
      </div>



    </div>
  );
}

export default Dashboard;
