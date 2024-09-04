import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <BootstrapNavbar bg="dark" className='p-2 w-100' variant="dark" expand="lg" expanded={expanded}>
      
      <div className="ml-auto d-flex">
        <BootstrapNavbar.Toggle 
          aria-controls="main-nav" 
          onClick={handleToggle}
        >
          {expanded ? (
            <span>&times;</span> // Close icon (×)
          ) : (
            <span>&#9776;</span> // Hamburger icon (☰)
          )}
        </BootstrapNavbar.Toggle>
      </div>
      <BootstrapNavbar.Collapse id="main-nav">
        <Nav className="ml-auto" onClick={() => setExpanded(false)}>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
      <BootstrapNavbar.Brand as={Link} to="/">
        Southern Cab Service
      </BootstrapNavbar.Brand>
    </BootstrapNavbar>
  );
}

export default Navbar;
