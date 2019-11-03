import React from 'react';
import { useSelector } from 'react-redux';
import { NavbarBrand, Row, Col, Container, Nav } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';

import Logo from '../assets/logo.png';
import RowForm from './RowForm.component';
import DictionaryList from './DictionaryList.component';
import Dictionary from './Dictionary.component';
import DictionaryEdit from './DictionaryEdit.component';
import {
  IconAdd,
  IconList,
  StyledLink,
  StyledNavBar,
  VCenteredWrapper,
  VHCenteredWrapper,
} from '../styled/style';

const Home = () => {
  const dictionaries = useSelector(state => state.dictionariesReducer.dictionaries);

  return (
    <div>
      <StyledNavBar fixed="top">
        <NavbarBrand className="mr-auto">
          <img src={Logo} alt="logo" />
        </NavbarBrand>
      </StyledNavBar>
      <Container fluid>
        <Row>
          <Col
            xs="12"
            sm="3"
            style={{
              height: '100vh',
            }}
          >
            <VCenteredWrapper>
              <Nav vertical>
                <StyledLink to="/">
                  <IconList />
                  All dictionaries
                </StyledLink>
                <StyledLink to="/addDictionary">
                  <IconAdd />
                  Add a dictionary
                </StyledLink>
              </Nav>
            </VCenteredWrapper>
          </Col>

          <Col
            xs="12"
            sm="9"
            style={{
              height: '100vh',
              backgroundColor: '#fff',
            }}
          >
            <Switch>
              <Route exact path="/">
                {dictionaries.length ? (
                  <DictionaryList />
                ) : (
                  <VHCenteredWrapper>
                    <h4>No dictionary available !</h4>
                  </VHCenteredWrapper>
                )}
              </Route>
              <Route path="/addDictionary">
                <RowForm />
              </Route>
              <Route path="/dictionary">
                <Dictionary />
              </Route>
              <Route path="/editDictionary">
                <DictionaryEdit />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
