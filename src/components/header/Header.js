import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logt.png'
function Header() {
    return (
            <div className='row px-0'>
                <Navbar className="bg-body-tertiary py-0" expand="lg">
                    <Container className='text-center'>
                        <Navbar.Brand href="#home" className=''> <img src={Logo} className='logo' alt='logo' /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link to='/' className=' nav-link px-3'>Home</Link>
                                <Link to='/' className='nav-link px-3'>About</Link>
                                <Link to='/services' className='nav-link px-3'>Services</Link>
                                <Link href='/' className='nav-link px-3'>About Us</Link>
                                <Link to='/contact' className='nav-link px-3'>Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
    );
}

export default Header;