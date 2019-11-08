import { Row } from '../../actions/types/rows.action.type';

export const ADD_DICTIONARY = 'add.dictionary';
export const DELETE_DICTIONARY = 'delete.dictionary';
export const DELETE_DICTIONARY_ROW = 'delete.dictionary.row';
export const ADD_DICTIONARY_ROW = 'add.dictionary.row';
export const UPDATE_DICTIONARY_ROW = 'update.dictionary.row';

export interface Dictionary {
  id: number;
  name: string;
  rows: Array<Row>;
}

export interface DictionariesState {
  id: number;
  dictionaries: Array<Dictionary>;
}

export interface DictionaryId {
  id: number;
}

export interface DictionaryRowIds {
  rowId: number;
  dictionaryId: number;
}

export interface DictionaryRow {
  dictionaryId: number;
  row: Row;
}

interface AddDictionaryAction {
  type: typeof ADD_DICTIONARY;
  payload: Dictionary;
}

interface DeleteDictionaryAction {
  type: typeof DELETE_DICTIONARY;
  payload: DictionaryId;
}

interface DeleteDictionaryRowAction {
  type: typeof DELETE_DICTIONARY_ROW;
  payload: DictionaryRowIds;
}

interface AddDictionaryRowAction {
  type: typeof ADD_DICTIONARY_ROW;
  payload: DictionaryRow;
}

interface UpdateDictionaryRowAction {
  type: typeof UPDATE_DICTIONARY_ROW;
  payload: DictionaryRow;
}

export type DictionariesActionTypes =
  | AddDictionaryAction
  | DeleteDictionaryAction
  | DeleteDictionaryRowAction
  | AddDictionaryRowAction
  | UpdateDictionaryRowAction;
