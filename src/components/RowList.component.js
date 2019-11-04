import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Col } from 'reactstrap';
import { MdDeleteForever } from 'react-icons/md';
import { DELETE_ROW, DELETE_ROW_WARNING } from '../actions/types/rows.action.type';
import { ScrollWrapper, IconWarning } from '../styled/style';

const RowList = () => {
  const rows = useSelector(state => state.rowsReducer.rows);
  const dispatch = useDispatch();
  const handleDelete = async row => {
    let payload;
    const duplicate = await rows.filter(
      elt => elt.domain === row.domain && elt.hasDuplicate
    );
    if (duplicate.length) {
      payload = { id: duplicate[0].id, hasDuplicate: false };
      await dispatch({ payload, type: DELETE_ROW_WARNING });
    }
    payload = { id: row.id };
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
      <ScrollWrapper>
        {rows.map(row => (
          <Row key={row.id} className="mt-2">
            <Col xs="5">
              <h6>{row.domain}</h6>
            </Col>
            <Col xs="5">
              <h6>{row.range}</h6>
            </Col>
            <Col xs="1" style={{ display: 'flex', alignItems: 'center' }}>
              {row.hasDuplicate && <IconWarning />}
            </Col>
            <Col xs="1">
              <Button outline color="danger" onClick={() => handleDelete(row)}>
                <MdDeleteForever />
              </Button>
            </Col>
          </Row>
        ))}
      </ScrollWrapper>
    </div>
  );
};

export default RowList;
