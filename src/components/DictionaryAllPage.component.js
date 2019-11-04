import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';

import { ComponentWrapper } from '../styled/style';
import DictionaryRow from './DictionaryRow.component';

const DictionaryAllPage = () => {
  const dictionaries = useSelector(state => state.dictionariesReducer.dictionaries);

  return (
    <ComponentWrapper>
      <Row>
        <Col xs="4">
          <h3>Dictionary name</h3>
        </Col>
        <Col xs="4">
          <h3>Row numbers</h3>
        </Col>
      </Row>
      <div style={{ overflowY: 'scroll' }}>
        {dictionaries.map(dictionary => (
          <DictionaryRow key={dictionary.id} dictionary={dictionary} />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default DictionaryAllPage;
