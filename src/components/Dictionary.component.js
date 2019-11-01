import React from 'react';
import { Table } from 'reactstrap';

const Dictionary = () => {
  return (
    <Table bordered style={{ textAlign: 'center' }}>
      <thead>
        <tr>
          <th>Domain</th>
          <th>Range</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>stonegrey</td>
          <td>grey</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Dictionary;
