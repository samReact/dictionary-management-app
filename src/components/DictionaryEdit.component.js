import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RowForm from './RowForm.component';
import DictionaryRowForm from './DictionaryRowForm';

const DictionaryEdit = () => {
  let location = useLocation();
  const { id } = location.state;

  const dictionaries = useSelector(state => state.dictionariesReducer.dictionaries);

  let dictionary = dictionaries.filter(elt => elt.id === id)[0] || [];

  return (
    <div style={{ marginTop: '20%' }}>
      {dictionary.rows.map(row => (
        <DictionaryRowForm key={row.id} dictionary={dictionary} row={row} />
      ))}
      <div style={{ marginTop: '20vh' }}>
        <RowForm dictionary={dictionary} dictionaryId={id} />
      </div>
    </div>
  );
};

export default DictionaryEdit;
