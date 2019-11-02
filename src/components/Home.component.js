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
import { Switch, Route, useHistory } from 'react-router-dom';
import Logo from '../assets/logo.png';
import RowForm from './RowForm.component';
import DictionaryList from './DictionaryList.component';

const Home = () => {
  const dictionaries = useSelector(state => state.dictionariesReducer.dictionaries);
  let history = useHistory();
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
            sm="3"
            style={{
              height: '100vh',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Nav vertical>
              <NavItem>
                <NavLink href="#" onClick={() => history.push('/')}>
                  All dictionaries
                </NavLink>
              </NavItem>
              <Button
                color="primary"
                block
                onClick={() => history.push('/addDictionary')}
              >
                + Add a dictionary
              </Button>
            </Nav>
          </Col>

          <Col
            xs="12"
            sm="9"
            style={{
              height: '100vh',
              backgroundColor: '#fff',
            }}
          >
            <div
              style={{
                marginTop: '20vh',
              }}
            >
              <Switch>
                <Route exact path="/">
                  {dictionaries.length ? (
                    <DictionaryList />
                  ) : (
                    <p>No dictionary available</p>
                  )}
                </Route>
                <Route path="/addDictionary">
                  <RowForm />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
