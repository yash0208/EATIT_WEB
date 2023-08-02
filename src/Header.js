import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header(){
    return (
        <div className="Header">

            <nav className="navigation">
                <Navbar expand={"lg"} className={"nav_css justify-content-between"}>
                    <Container className={"nav_container"}>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="menu" id="basic-navbar-nav">
                            <div className="menu_items">
                                <a className="menu_item" href="#home">Home</a>
                                <a className="menu_item" href="#link">Meal Planner</a>
                                <a className="menu_item" href="#link">Videos</a>
                                <a className="menu_item" href="#link">Fridge</a>
                                <a className="menu_item" href="#link">Account</a>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>

    );
}
export default Header;