import React from 'react'
import {Navbar, NavDropdown,Container, Nav} from 'react-bootstrap'
import {Link,  useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem("userInfo")
  
  return (
    <Navbar bg="primary" expand="lg" variant='success'>
      <Container>
        <Navbar.Brand href="#home">
          <Link Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            INCUBATION-MANAGEMENT
          </Link >
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        {user ?
        <>
        <Nav.Link className='text-light'><Link to="/application" style={{ color: 'white', textDecoration: 'none' }}>Application-Form</Link></Nav.Link>
        <Nav.Link className='text-light'><Link to="/status" style={{ color: 'white', textDecoration: 'none' }}>Status</Link></Nav.Link>
        </>
         :""
        }
        <NavDropdown title={<span className='text-white'>Account</span>}
         id="basic-nav-dropdown">
          {user ?
            <NavDropdown.Item
              onClick={() => {
                localStorage.removeItem("userInfo");
                navigate('/login')
              }}
            >
              Logout
            </NavDropdown.Item>
            :
            <>
            <NavDropdown.Item href="#action/3.1">
            <Link  to="/login" style={{  textDecoration: 'none' }}>
            Login
          </Link >
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/register" style={{ textDecoration: 'none' }}> Signup</Link>
          </NavDropdown.Item>
            </>
          }

          
        </NavDropdown>
      </Container>
    </Navbar>

  )
}

export default Header
  