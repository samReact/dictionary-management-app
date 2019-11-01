import React from 'react';
import { useSelector } from 'react-redux';
import {
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

import Logo from '../assets/logo.png';
import Dictionary from './Dictionary.component';

const Home = () => {
  const dictionaries = useSelector(state => state.dictionaryReducer.dictionaries);
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
              width: '100%',
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
              <Button color="primary" size="lg" block>
                + Add a dictionary
              </Button>
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
            {dictionaries.lenght ? (
              dictionaries.map(dictionary => <Dictionary />)
            ) : (
              <p>No dictionary available</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
