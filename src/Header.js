import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from "react-bootstrap";
function Header(){
    return (
        <div className="Header">

            <nav className="navigation">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand className={"brand"} href="#">Bon<span style={{color:"#F28A4B"}}>appétit</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className={"navigation_items"}>
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: 'fit-content' }}
                                navbarScroll
                            >
                                <NavDropdown className={"menu_items"} title="Recipes" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">15-minutes-or-less</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        weeknight
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        pies-and-tarts
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className={"menu_items"} href="#action1">Meal Planner</Nav.Link>
                                <Nav.Link className={"menu_items"} href="#action2">Videos</Nav.Link>
                                <Nav.Link className={"menu_items"} href="#" >Fridge</Nav.Link>
                                <Nav.Link className={"menu_items"} href="#" >Nutrition</Nav.Link>
                            </Nav>
                            <div className="button">
                                <div className="box">H</div>
                                <div className="box">E</div>
                                <div className="box">L</div>
                                <div className="box">L</div>
                                <div className="box">O</div>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>

    );
}
export default Header;