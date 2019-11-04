import React, { useState } from 'react';
import { Row, Col, FormGroup, Input, Label, Button, Form } from 'reactstrap';
import { MdDeleteForever, MdSave, MdEdit } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  DELETE_DICTIONARY_ROW,
  UPDATE_DICTIONARY_ROW,
} from '../actions/types/dictionaries.action.type';
import RowForm from './RowForm.component';
import { notify } from '../utils';
import { ScrollWrapper, IconWarning } from '../styled/style';

const DictionaryEdit = () => {
  let location = useLocation();
  const { id } = location.state;

  const dispatch = useDispatch();
  const dictionaries = useSelector(state => state.dictionariesReducer.dictionaries);

  let dictionary = dictionaries.filter(elt => elt.id === id)[0] || [];

  const [updatedRow, setRow] = useState({ id: 0, domain: '', range: '' });
  const [activeId, setActiveId] = useState(null);

  const handleDeleteRow = async row => {
    let payload;

    const duplicate = await dictionary.rows.filter(
      elt => elt.domain === row.domain && elt.hasDuplicate
    );
    if (duplicate.length) {
      payload = {
        dictionaryId: id,
        row: {
          ...duplicate[0],
          hasDuplicate: false,
        },
      };
      await dispatch({ payload, type: UPDATE_DICTIONARY_ROW });
    }
    payload = { dictionaryId: dictionary.id, rowId: row.id };
    dispatch({ payload, type: DELETE_DICTIONARY_ROW });
    notify('success', 'Row removed !');
  };

  const handleSaveRow = row => {
    let payload;
    const { domain, range } = updatedRow;
    payload = { dictionaryId: id, row: { id: row.id, domain, range } };
    dispatch({ payload, type: UPDATE_DICTIONARY_ROW });
    setActiveId(null);
  };
  const handleEditRow = async row => {
    await setActiveId(row.id);
    setRow({ id: row.id, domain: row.domain, range: row.range });
  };

  return (
    <div style={{ marginTop: '20%' }}>
      {dictionary.rows.map(row => (
        <Row key={row.id} className="mt-2">
          <Col xs="9">
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="domain" className="mr-sm-2">
                  Domain
                </Label>
                <Input
                  disabled={row.id !== activeId}
                  type="text"
                  name="domain"
                  defaultValue={row.domain}
                  onChange={e => setRow({ ...updatedRow, domain: e.target.value })}
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="range" className="mr-sm-2">
                  Range
                </Label>
                <Input
                  type="text"
                  disabled={row.id !== activeId}
                  name="range"
                  defaultValue={row.range}
                  onChange={e => setRow({ ...updatedRow, range: e.target.value })}
                />
              </FormGroup>
            </Form>
          </Col>
          <Col xs="1" style={{ display: 'flex', alignItems: 'center' }}>
            {row.hasDuplicate && <IconWarning />}
          </Col>
          <Col xs="1">
            <Button
              className="mr-sm-2"
              outline
              onClick={() => handleDeleteRow(row)}
              color="danger"
            >
              <MdDeleteForever />
            </Button>
          </Col>
          {row.id === activeId ? (
            <Col xs="1">
              <Button className="mr-sm-2" outline onClick={() => handleSaveRow(row)}>
                <MdSave />
              </Button>
            </Col>
          ) : (
            <Col xs="1">
              <Button className="mr-sm-2" outline onClick={() => handleEditRow(row)}>
                <MdEdit />
              </Button>
            </Col>
          )}
        </Row>
      ))}
      <div style={{ marginTop: '20vh' }}>
        <RowForm dictionary={dictionary} dictionaryId={id} />
      </div>
    </div>
  );
};

export default DictionaryEdit;
