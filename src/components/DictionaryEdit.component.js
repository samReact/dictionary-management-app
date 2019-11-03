import React, { useEffect, useState } from 'react';
import { Row, Col, FormGroup, Input, Label, Button, Form } from 'reactstrap';
import { MdDeleteForever, MdAdd } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  DELETE_DICTIONARY_ROW,
  ADD_DICTIONARY_ROW,
} from '../actions/types/dictionaries.action.type';
import { INCREMENT_ID } from '../actions/types/rows.action.type';

const DictionaryEdit = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const { id } = location.state;
  const dictionaries = useSelector(state => state.dictionariesReducer.dictionaries);
  let dictionary = dictionaries.filter(elt => elt.id === id)[0] || [];
  const [domain, setDomain] = useState('');
  const [range, setRange] = useState('');
  const rowId = useSelector(state => state.rowsReducer.id);

  useEffect(() => {
    // Update the document title using the browser API
  });
  // const { rows = [] } = dictionary;

  const handleRemove = payload => {
    dispatch({ payload, type: DELETE_DICTIONARY_ROW });
  };

  const handleAddRow = async () => {
    let payload;
    const newId = rowId + 1;
    payload = { dictionaryId: id, row: { id: newId, domain, range } };
    await dispatch({ payload, type: ADD_DICTIONARY_ROW });
    payload = { id: newId };
    await dispatch({ payload, type: INCREMENT_ID });
    setDomain('');
    setRange('');
  };

  return (
    <div style={{ marginTop: '20%' }}>
      {dictionary.rows.map(row => (
        <Row key={row.id} className="mt-2">
          <Col xs="10">
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">
                  Domain
                </Label>
                <Input
                  value={row.domain}
                  type="text"
                  name="domain"
                  // onChange={e => setDomain(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">
                  Range
                </Label>
                <Input
                  type="text"
                  value={row.range}
                  name="range"
                  // onChange={e => setRange(e.target.value)}
                />
              </FormGroup>
            </Form>
          </Col>
          <Col xs="2">
            <Button
              className="mr-sm-2"
              outline
              onClick={() => handleRemove({ dictionaryId: dictionary.id, rowId: row.id })}
              color="danger"
            >
              <MdDeleteForever />
            </Button>
          </Col>
        </Row>
      ))}
      <Row style={{ marginTop: '20%' }}>
        <Col xs="10">
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">
                Domain
              </Label>
              <Input
                value={domain}
                type="text"
                name="domain"
                onChange={e => setDomain(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">
                Range
              </Label>
              <Input
                type="text"
                value={range}
                name="range"
                onChange={e => setRange(e.target.value)}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col xs="2">
          <Button className="mr-sm-2" outline onClick={() => handleAddRow()}>
            <MdAdd />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default DictionaryEdit;
