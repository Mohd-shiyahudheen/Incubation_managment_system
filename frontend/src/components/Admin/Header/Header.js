import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
  return (
    <div>
      <Navbar className='nav' expand="lg" variant='success'>
        <Container >
          <Navbar.Brand href="#home"><Link to="/admin/home" className='text-light' style={{ textDecoration: 'none' }}>Admin-Pannel</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <NavDropdown title={<span className='text-white'>Options</span>} id="basic-nav-dropdown">
            <NavDropdown.Item> <Link to='/admin/edituser' style={{ textDecoration: 'none' }}></Link> </NavDropdown.Item>
            <NavDropdown.Item ><Link to='/admin/user' style={{ textDecoration: 'none' }}>User-Management</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/admin/application' style={{ textDecoration: 'none' }}>Application-List</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/admin/processed' style={{ textDecoration: 'none' }}>Processed-incubations</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/admin/approved' style={{ textDecoration: 'none' }}>Approved-incubations</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/admin/rejected' style={{ textDecoration: 'none' }}>Rejected-incubations</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/admin/booking' style={{ textDecoration: 'none' }}>Booking-solt</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to='/admin' style={{ textDecoration: 'none' }}>Logout</Link></NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>

    </div>
  );
}

export default Header;
