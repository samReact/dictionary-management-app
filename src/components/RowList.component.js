import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import { MdDeleteForever } from 'react-icons/md';
import { DELETE_ROW } from '../actions/types/rows.action.type';

const RowList = () => {
  const rows = useSelector(state => state.rowsReducer.rows);
  const dispatch = useDispatch();
  const handleRemove = id => {
    const payload = { id };
    dispatch({ payload, type: DELETE_ROW });
  };

  return (
    <div>
      <Row>
        <Col xs="5">
          <h3>Domain</h3>
        </Col>
        <Col xs="5">
          <h3>Range</h3>
        </Col>
      </Row>
      <div style={{ height: '15vh', overflowY: 'scroll' }}>
        {rows.map(row => (
          <Row key={row.id} className="mt-2">
            <Col xs="5">
              <h6>{row.domain}</h6>
            </Col>
            <Col xs="5">
              <h6>{row.range}</h6>
            </Col>
            <Col xs="2">
              <Button outline color="danger" onClick={() => handleRemove(row.id)}>
                <MdDeleteForever />
              </Button>
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
};

export default RowList;
