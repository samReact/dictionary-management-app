import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { MdAdd } from 'react-icons/md';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';

import { notify } from '../utils';
import { StyledAddRowButton } from '../styled/style';
import {
  ADD_DICTIONARY_ROW,
  Dictionary,
  DictionaryRow,
} from '../actions/types/dictionaries.action.type';
import {
  INCREMENT_ID,
  ADD_ROW,
  Row as RowType,
  RowId,
} from '../actions/types/rows.action.type';
import { AppState } from '../reducers/rootReducers';

interface RowFormProps {
  dictionary?: Dictionary;
}

const RowForm = ({ dictionary }: RowFormProps) => {
  const [errorDomain, setErrorDomain] = useState(false);
  const [errorRange, setErrorRange] = useState(false);
  const [domain, setDomain] = useState('');
  const [range, setRange] = useState('');

  const rows = useSelector((state: AppState) => state.rowsReducer.rows);
  const rowId = useSelector((state: AppState) => state.rowsReducer.id);
  const dispatch = useDispatch();

  const handleRowValidation = async () => {
    const newId = rowId + 1;
    let cycle, duplicate: Array<RowType>;
    let payload;
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
      cycle = dictionary.rows.filter(row => row.range === domain);
      duplicate = dictionary.rows.filter(row => row.domain === domain);
    }
    if (!dictionary) {
      cycle = rows.filter(row => row.range === domain);
      duplicate = rows.filter(row => row.domain === domain);
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
      payload = {
        dictionaryId: dictionary.id,
        row: { id: newId, domain, range, ...hasDuplicate },
      };
      return handleDictionaryAddRow(payload, newId);
    }
    payload = { id: newId, domain, range, ...hasDuplicate };
    return handleAddRow(payload);
  };

  const handleAddRow = (payload: RowType) => {
    dispatch({ payload, type: ADD_ROW });
    setDomain('');
    setRange('');
    notify('success', 'Row added !');
  };

  const handleDictionaryAddRow = (payload: DictionaryRow | RowId, newId: number) => {
    dispatch({ payload, type: ADD_DICTIONARY_ROW });
    payload = { id: newId };
    dispatch({ payload, type: INCREMENT_ID });
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
          <StyledAddRowButton outline onClick={() => handleRowValidation()}>
            <MdAdd />
          </StyledAddRowButton>
        </Col>
      </FormGroup>
    </Form>
  );
};
export default RowForm;
