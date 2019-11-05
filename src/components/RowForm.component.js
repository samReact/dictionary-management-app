import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { MdAdd } from 'react-icons/md';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { notify } from '../utils';
import { StyledAddRowButton } from '../styled/style';
import { ADD_DICTIONARY_ROW } from '../actions/types/dictionaries.action.type';
import { INCREMENT_ID, ADD_ROW } from '../actions/types/rows.action.type';

const RowForm = ({ dictionary, dictionaryId }) => {
  const [errorDomain, setErrorDomain] = useState(false);
  const [errorRange, setErrorRange] = useState(false);
  const [domain, setDomain] = useState('');
  const [range, setRange] = useState('');

  const rows = useSelector(state => state.rowsReducer.rows);
  const rowId = useSelector(state => state.rowsReducer.id);
  const dispatch = useDispatch();

  const handleRowValidation = async dictionary => {
    const newId = rowId + 1;
    let cycle, duplicate, payload;
    let hasDuplicate = { hasDuplicate: false };
    validator.trim(domain);
    validator.trim(range);
    if (
      validator.isEmpty(domain, { ignore_whitespace: true }) ||
      validator.isEmpty(range, { ignore_whitespace: true })
    ) {
      setErrorDomain(validator.isEmpty(domain, { ignore_whitespace: true }));
      return setErrorRange(validator.isEmpty(range, { ignore_whitespace: true }));
    }
    if (dictionary) {
      cycle = await dictionary.rows.filter(row => row.range === domain);
      duplicate = await dictionary.rows.filter(row => row.domain === domain);
    }
    if (!dictionary) {
      cycle = await rows.filter(row => row.range === domain);
      duplicate = await rows.filter(row => row.domain === domain);
    }
    if (cycle.length) {
      notify('error', 'Chain or cycle !');
      return setErrorDomain(true);
    }
    if (duplicate.length) {
      hasDuplicate = { hasDuplicate: true };
      notify('warning', 'Duplicate domain !');
    }
    if (dictionary) {
      payload = { dictionaryId, row: { id: newId, domain, range, ...hasDuplicate } };
      return handleDictionaryAddRow(payload, newId);
    }
    payload = { id: newId, domain, range, ...hasDuplicate };
    return handleAddRow(payload);
  };

  const handleAddRow = payload => {
    dispatch({ payload, type: ADD_ROW });
    setDomain('');
    setRange('');
    notify('success', 'Row added !');
  };

  const handleDictionaryAddRow = async (payload, newId) => {
    await dispatch({ payload, type: ADD_DICTIONARY_ROW });
    payload = { id: newId };
    await dispatch({ payload, type: INCREMENT_ID });
    setDomain('');
    setRange('');
    notify('success', 'Row added !');
  };

  return (
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
        <Col sm={{ size: 1, offset: 1 }}>
          <StyledAddRowButton outline onClick={() => handleRowValidation(dictionary)}>
            <MdAdd />
          </StyledAddRowButton>
        </Col>
      </FormGroup>
    </Form>
  );
};
export default RowForm;
