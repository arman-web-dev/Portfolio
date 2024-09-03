import React, { useEffect } from 'react';
import './header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolling = window.scrollY;

      if (scrolling > 200) {
        document.querySelector('.Total').classList.add('sticky_header');
      } else {
        document.querySelector('.Total').classList.remove('sticky_header');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar expand="lg" className='Total'>
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo">
              <h3>Personala</h3>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#ban">Home</Nav.Link>
              <Nav.Link href="#hero">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#gallary">Portfolio</Nav.Link>
              <Nav.Link href="#test">Testimonials</Nav.Link>
              <Nav.Link href="#blog">Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
