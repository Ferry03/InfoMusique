import Login from "./Login";
import { Link } from 'react-router-dom'
import { Navbar, NavDropdown,Nav,Button ,Container,Row,Col} from 'react-bootstrap'
const Navigation =()=>{
    return(
       
        <>
 <Navbar bg="light" variant="light" expand="lg">
  <Container>
    <Link to="/" className="navbar-brand">PROJET 1</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/login" className="nav-link"> Login</Link>   
        <Link to="/signup" className="nav-link"> SignUp</Link>  
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 

 
       

        </>
    );
}
export default Navigation