import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import validator from 'validator';

import { ADD_ROW, CLEAR_ROWS } from '../actions/types/rows.action.type';
import RowList from './RowList.component';
import { ADD_DICTIONARY } from '../actions/types/dictionaries.action.type';
import {
  StyledAddButton,
  ComponentWrapper,
  NameWrapper,
  StyledAddRowButton,
} from '../styled/style';

const AddDictionaryForm = () => {
  const [domain, setDomain] = useState('');
  const [range, setRange] = useState('');
  const [name, setName] = useState('');
  const [errorDomain, setErrorDomain] = useState(false);
  const [errorRange, setErrorRange] = useState(false);

  let history = useHistory();

  const dispatch = useDispatch();
  const rowId = useSelector(state => state.rowsReducer.id);
  const dictionaryId = useSelector(state => state.dictionariesReducer.id);
  const rows = useSelector(state => state.rowsReducer.rows);

  const handleAddDictionary = async () => {
    const newId = dictionaryId + 1;
    const payload = { id: newId, name, rows };
    await dispatch({ payload, type: ADD_DICTIONARY });
    await dispatch({ type: CLEAR_ROWS });
    history.push('/');
  };

  const handleAddRow = async () => {
    let hasDuplicate = { hasDuplicate: false };
    validator.trim(domain);
    validator.trim(range);
    if (validator.isEmpty(domain) || validator.isEmpty(range)) {
      setErrorDomain(validator.isEmpty(domain));
      return setErrorRange(validator.isEmpty(range));
    }
    const cycle = await rows.filter(row => row.range === domain);
    const duplicate = await rows.filter(row => row.domain === domain);
    if (cycle.length) {
      return setErrorDomain(true);
    }

    if (duplicate.length) {
      hasDuplicate = { hasDuplicate: true };
    }

    const newId = rowId + 1;
    const payload = { id: newId, domain, range, ...hasDuplicate };
    await dispatch({ payload, type: ADD_ROW });
    setDomain('');
    setRange('');
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
      <div style={{ marginTop: '20vh' }}>
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

        <Form>
          <FormGroup row>
            <Label for="domain" sm={1}>
              Domain
            </Label>
            <Col sm={4}>
              <Input
                onFocus={() => setErrorDomain(false)}
                invalid={errorDomain}
                value={domain}
                type="text"
                name="domain"
                onChange={e => setDomain(e.target.value)}
                placeholder="Domain"
              />
            </Col>
            <Label for="range" sm={1}>
              Range
            </Label>
            <Col sm={4}>
              <Input
                onFocus={() => setErrorRange(false)}
                invalid={errorRange}
                type="text"
                value={range}
                name="range"
                onChange={e => setRange(e.target.value)}
                placeholder="Range"
              />
            </Col>
            <Col sm={2}>
              <StyledAddRowButton outline onClick={() => handleAddRow()}>
                <MdAdd />
              </StyledAddRowButton>
            </Col>
          </FormGroup>
        </Form>
        {name.length && rows.length ? (
          <StyledAddButton size="lg" onClick={() => handleAddDictionary()}>
            Add
          </StyledAddButton>
        ) : null}
      </div>
    </ComponentWrapper>
  );
};

export default AddDictionaryForm;
