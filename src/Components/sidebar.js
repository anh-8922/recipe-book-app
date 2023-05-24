import Nav from 'react-bootstrap/Nav';
import '../css/styles.css';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
export default function Sidebar() {
    return(
        <Nav id='mainNav' defaultActiveKey="/home" className="flex-column">
            <button id='nav-button'><BsFillArrowRightCircleFill style={{color: 'whitesmoke', fontSize: '3rem'}}/></button>
            <Nav.Link id='navItems' href="/home">Active</Nav.Link>
            <Nav.Link id='navItems' eventKey="link-1">Link</Nav.Link>
            <Nav.Link id='navItems' eventKey="link-2">Link</Nav.Link>
            <Nav.Link id='navItems' eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav>
    )
}