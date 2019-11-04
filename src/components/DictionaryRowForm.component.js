import React, { useState } from 'react';
import { Col, FormGroup, Input, Label, Button, Form } from 'reactstrap';
import { MdDeleteForever, MdSave, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import validator from 'validator';

import {
  DELETE_DICTIONARY_ROW,
  UPDATE_DICTIONARY_ROW,
} from '../actions/types/dictionaries.action.type';
import { IconWarning } from '../styled/style';
import { notify } from '../utils';

const DictionaryRowForm = ({ dictionary, row }) => {
  const [errorDomain, setErrorDomain] = useState(false);
  const [errorRange, setErrorRange] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [readyForSave, setReady] = useState(false);
  const [updatedRow, setRow] = useState({ id: 0, domain: '', range: '' });

  const dispatch = useDispatch();

  const handleRowValidation = async currentRow => {
    let cycle, duplicate;
    let hasDuplicate = { hasDuplicate: false };
    validator.trim(updatedRow.domain);
    validator.trim(updatedRow.range);
    if (validator.isEmpty(updatedRow.domain) || validator.isEmpty(updatedRow.range)) {
      setErrorDomain(validator.isEmpty(updatedRow.domain));
      return setErrorRange(validator.isEmpty(updatedRow.range));
    }
    cycle = await dictionary.rows.filter(row => row.range === updatedRow.domain);
    duplicate = await dictionary.rows.filter(row => row.domain === updatedRow.domain);

    if (cycle.length) {
      notify('error', 'Chain or cycle !');
      return setErrorDomain(true);
    }
    if (duplicate.length) {
      hasDuplicate = { hasDuplicate: true };
      notify('warning', 'Duplicate domain !');
    }
    let row = { ...updatedRow, ...hasDuplicate };

    return handleSaveRow(row);
  };

  const handleDeleteRow = async row => {
    let payload;
    const duplicate = await dictionary.rows.filter(
      elt => elt.domain === row.domain && elt.hasDuplicate
    );
    if (duplicate.length) {
      payload = {
        dictionaryId: dictionary.id,
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

  const handleEditRow = async row => {
    await setActiveId(row.id);
    setRow({ id: row.id, domain: row.domain, range: row.range });
  };

  const handleSaveRow = row => {
    let payload;
    payload = { dictionaryId: dictionary.id, row };
    dispatch({ payload, type: UPDATE_DICTIONARY_ROW });
    setActiveId(null);
  };

  return (
    <Form>
      <FormGroup row>
        <Label for="domain" sm={1}>
          Domain
        </Label>
        <Col sm={3}>
          <Input
            onFocus={() => {
              setErrorDomain(false);
              return setReady(true);
            }}
            invalid={errorDomain}
            disabled={row.id !== activeId}
            type="text"
            name="domain"
            defaultValue={row.domain}
            onChange={e => setRow({ ...updatedRow, domain: e.target.value, id: row.id })}
          />
        </Col>
        <Label for="range" sm={1}>
          Range
        </Label>
        <Col sm={3}>
          <Input
            onFocus={() => setErrorRange(false)}
            invalid={errorRange}
            type="text"
            disabled={row.id !== activeId}
            name="range"
            defaultValue={row.range}
            onChange={e => setRow({ ...updatedRow, range: e.target.value, id: row.id })}
          />
        </Col>
        <Col sm={1} style={{ display: 'flex', alignItems: 'center' }}>
          {row.hasDuplicate && <IconWarning />}
        </Col>
        <Col sm={{ size: 1, offset: 1 }}>
          <Button
            className="mr-sm-2"
            outline
            onClick={() => handleDeleteRow(row)}
            color="danger"
          >
            <MdDeleteForever />
          </Button>
        </Col>
        {row.id === activeId && readyForSave ? (
          <Col sm={1}>
            <Button className="mr-sm-2" outline onClick={() => handleRowValidation(row)}>
              <MdSave />
            </Button>
          </Col>
        ) : (
          <Col sm={1}>
            <Button className="mr-sm-2" outline onClick={() => handleEditRow(row)}>
              <MdEdit />
            </Button>
          </Col>
        )}
      </FormGroup>
    </Form>
  );
};

export default DictionaryRowForm;
