import { Reducer } from 'redux-testkit';
import initialState from '../util/initial-state';
import {livros} from '../../components/livro/mock';
import * as types from '../../components/livro/actionTypes';
import livroReducer from '../../components/livro/livro-reducer';

describe('livro reducer test', () => {
  it('should have initial state', () => {
    expect(livroReducer(initialState.livro, {})).toEqual(initialState.livro);
  });

  it('should have initial state when undefined', () => {
    expect(livroReducer(undefined, {})).toEqual(initialState.livro);
  });

  it('should have find all livros when GET_LIVROS type', () => {
    const action = {type: types.GET_LIVROS, payload: livros.livros};
    const valueFromAction = {...initialState.livro, livros: [].concat(livros.livros)};

    Reducer(livroReducer)
      .withState(initialState.livro)
      .expect(action)
      .toReturnState(valueFromAction);
  });

  it('should add livro when ADD_LIVRO type', () => {
    const action = {type: types.ADD_LIVRO, payload: livros.livros[0]};
    const valueFromAction = {...initialState.livro, livros: [].concat(livros.livros[0])};

    Reducer(livroReducer)
      .withState(initialState.livro)
      .expect(action)
      .toReturnState(valueFromAction);
  });

  it('should be remove livro to livros list when REMOVE_LIVRO type', () => {
    const action = {type: types.REMOVE_LIVRO, payload: livros.livros[0]};
    const valueFromAction = {...initialState.livro, livros: []};
    initialState.livro.livros.concat(livros.livros[0]);

    Reducer(livroReducer)
      .withState(initialState.livro)
      .expect(action)
      .toReturnState(valueFromAction);
  });

  it('should be not remove livro to livros list when REMOVE_LIVRO type and livro not equal', () => {
    const action = {type: types.REMOVE_LIVRO, payload: livros.livros[0]};
    initialState.livro.livros.concat(livros.livros[0]);
    const stateMock = {
      livros: [{
        titulo: 'test livro',
        isbn: '123',
        preco: 20.0,
        dtLancamento: '23/09/2016',
        autores: [{
          nome: 'ciclano',
          email: 'ciclano@email.com'
        }]
      }]};

    Reducer(livroReducer)
      .withState(stateMock)
      .expect(action)
      .toReturnState(stateMock);
  });

});