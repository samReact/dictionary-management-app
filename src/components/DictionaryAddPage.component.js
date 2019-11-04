import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { notify } from '../utils';
import { CLEAR_ROWS } from '../actions/types/rows.action.type';
import RowList from './RowList.component';
import { ADD_DICTIONARY } from '../actions/types/dictionaries.action.type';
import {
  StyledAddButton,
  ComponentWrapper,
  NameWrapper,
  ContentWrapper,
} from '../styled/style';
import RowForm from './RowForm.component';

const DictionaryAddPage = () => {
  const [name, setName] = useState('');

  let history = useHistory();

  const dispatch = useDispatch();
  const dictionaryId = useSelector(state => state.dictionariesReducer.id);
  const rows = useSelector(state => state.rowsReducer.rows);

  const handleAddDictionary = async () => {
    const newId = dictionaryId + 1;
    const payload = { id: newId, name, rows };
    await dispatch({ payload, type: ADD_DICTIONARY });
    await dispatch({ type: CLEAR_ROWS });
    history.push('/');
    notify('success', 'Dictionary added !');
  };

  return (
    <ComponentWrapper>
      <ComponentWrapper>
        <h3>Name</h3>
        <Row>
          <Col xs={4}>
            <NameWrapper>
              <h5>{name}</h5>
            </NameWrapper>
          </Col>
        </Row>
      </ComponentWrapper>
      <RowList />
      <ContentWrapper>
        <Form>
          <FormGroup row>
            <Label for="name" sm={1}>
              Name
            </Label>
            <Col sm={4}>
              <Input
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
                placeholder="Name"
              />
            </Col>
          </FormGroup>
        </Form>
        <RowForm />
        {name.length && rows.length ? (
          <StyledAddButton size="lg" onClick={() => handleAddDictionary()}>
            Add
          </StyledAddButton>
        ) : null}
      </ContentWrapper>
    </ComponentWrapper>
  );
};

export default DictionaryAddPage;
