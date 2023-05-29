import Nav from 'react-bootstrap/Nav';
import './component.css';
export default function Sidebar() {
    return(
        <Nav id='mainNav' defaultActiveKey="/home" className="flex-column">
            <Nav.Link id='navItems' href="/home">Home</Nav.Link>
            <Nav.Link id='navItems' eventKey="account">Account</Nav.Link>
            <Nav.Link id='navItems' eventKey="help">Help</Nav.Link>
            <Nav.Link id='navItems' eventKey="contact">Contact</Nav.Link>
            <Nav.Link id='navItems' eventKey="about">About</Nav.Link>
            <Nav.Link id='navItems' eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav>
    )
}