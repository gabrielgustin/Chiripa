import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';
import { CartWidget } from '../CartWidget/CartWidget';


const NavbarResponsive = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt='logo' className='logo'></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='NavMenuContainer'>
            <div className='NavMenu'>
              <div>
                <NavLink className={({ isActive }) => isActive ? "Active" : "Inactive"} to="/">
                  <h5>
                    Inicio
                  </h5>
                </NavLink>
              </div>
              <div>
                <NavLink className={({ isActive }) => isActive ? "Active" : "Inactive"} to="/item">
                  <h5>
                    Cervezas
                  </h5>
                </NavLink>
              </div>
              <div>
                <NavLink className={({ isActive }) => isActive ? "Active" : "Inactive"} to="/contacto">
                  <h5>
                    Contacto
                  </h5>
                </NavLink>
              </div>
            </div>
            <div className='NavOp'>
              <div>
                <Col className='text-center'>
                  <Row>
                    <Link className='Inactive' to='/#'>
                      <h6>Ingresar</h6>
                    </Link>
                  </Row>
                  <Row>
                    <Link className='Inactive' to='/#'>
                      <h6>Registrarme</h6>
                    </Link>
                  </Row>
                </Col>
              </div>
              <Link to='/#'>
                <Button variant='secondary' className='UserIcon'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                  </div>
                </Button>
              </Link>
              <CartWidget />
            </div>


            {/* <Nav className="me-auto">
              <p>
                <NavLink  >
                  Home
                </NavLink>
              </p>
              <NavLink  >
                <p>Cervezas</p>
              </NavLink>
              <NavLink  >
                <p>Contacto</p>
              </NavLink>
            </Nav>
            <Nav>
              <Link to='/#'>
                Registrarme
              </Link>
              <Link to='/#'>
                Ingresar
              </Link>
              <Link to='/#'>
                <Button variant='secondary'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </Button>
              </Link>
              <CartWidget />
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
};

export default NavbarResponsive;