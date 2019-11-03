import React from 'react';
import { Table, Row, Col } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { ComponentWrapper } from '../styled/style';

const Dictionary = () => {
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
                <th>Domain</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
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

export default Dictionary;
