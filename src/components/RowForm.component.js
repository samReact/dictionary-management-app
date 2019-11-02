import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ROW } from '../actions/types/rows.action.type';
import RowList from './RowList.component';

const AddDictionaryForm = () => {
  const [domain, setDomain] = useState('');
  const [range, setRange] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const id = useSelector(state => state.rowsReducer.id);
  const newId = id + 1;
  const payload = { id: newId, domain, range };

  return (
    <div>
      <h2 style={{ marginTop: '10%' }}>{name}</h2>
      <div style={{ marginTop: '10%' }}>
        <RowList />
      </div>

      <Row style={{ marginTop: '20%' }}>
        <Col xs="10">
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">
                Domain
              </Label>
              <Input
                type="text"
                name="domain"
                onChange={e => setDomain(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">
                Range
              </Label>
              <Input type="text" name="range" onChange={e => setRange(e.target.value)} />
            </FormGroup>
          </Form>
        </Col>
        <Col xs="2">
          <Button
            className="mr-sm-2"
            onClick={() => dispatch({ payload, type: ADD_ROW })}
          >
            <MdAdd />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs="10">
          <Form inline>
            <FormGroup className="mb-2 mt-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">
                Name
              </Label>
              <Input type="text" name="domain" onChange={e => setName(e.target.value)} />
            </FormGroup>
          </Form>
        </Col>
        <Col xs="2">
          <Button className="mr-sm-2 mt-2">
            <MdAdd />
          </Button>
        </Col>
      </Row>
      <Button>+ Add</Button>
    </div>
  );
};

export default AddDictionaryForm;
