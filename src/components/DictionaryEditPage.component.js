import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RowForm from './RowForm.component';
import DictionaryRowForm from './DictionaryRowForm.component';
import { ContentWrapper } from '../styled/style';

const DictionaryEditPagePage = () => {
  let location = useLocation();
  const { id } = location.state;
  const dictionaries = useSelector(state => state.dictionariesReducer.dictionaries);
  let dictionary = dictionaries.filter(elt => elt.id === id)[0] || [];

  return (
    <ContentWrapper>
      {dictionary.rows.map(row => (
        <DictionaryRowForm key={row.id} dictionary={dictionary} row={row} />
      ))}
      <ContentWrapper>
        <RowForm dictionary={dictionary} dictionaryId={id} />
      </ContentWrapper>
    </ContentWrapper>
  );
};

export default DictionaryEditPagePage;
