import React from 'react';
import { Table, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { ComponentWrapper } from '../styled/style';
import { IconWarning } from '../styled/style';
import { Row as RowType } from '../actions/types/rows.action.type';

const DictionaryPage = () => {
  let location = useLocation();
  const { dictionary } = location.state;
  const { rows } = dictionary;

  return (
    <ComponentWrapper>
      <Row>
        <Col sm={6} xs={12}>
          <h3>{dictionary.name}</h3>
          <Table bordered>
            <thead>
              <tr>
                <th></th>

                <th>Domain</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row: RowType) => (
                <tr key={row.id}>
                  <td>{row.hasDuplicate && <IconWarning />}</td>
                  <td>{row.domain}</td>
                  <td>{row.range}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </ComponentWrapper>
  );
};

export default DictionaryPage;
