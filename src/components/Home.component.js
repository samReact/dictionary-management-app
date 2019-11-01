import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import Logo from '../assets/logo.png';

const Home = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        style={{ backgroundColor: '#f2f6fa', borderBottom: '1px solid lightgrey' }}
      >
        <NavbarBrand className="mr-auto">
          <img src={Logo} alt="logo" />
        </NavbarBrand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col
            xs="12"
            sm="4"
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Nav vertical>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Link</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col
            xs="12"
            sm="8"
            style={{
              height: '100vh',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            coucou
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
