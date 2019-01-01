import {GET_AUTORES, ADD_AUTOR, REMOVE_AUTOR} from './actionTypes';

const initialState = {
  autores: []
};

const autorReducer = (state = initialState, action) => {

  switch (action.type) {
    case REMOVE_AUTOR:
      return {
        ...state,
        autores: state.autores.filter(autor => autor !== action.payload)
      };
    case ADD_AUTOR:
      return {
        ...state,
        autores: [...state.autores].concat({
          nome: action.payload.nome,
          email: action.payload.email
        })
      };
    case GET_AUTORES:
      return {
        ...state,
        autores: [].concat(action.payload)
      }
    default:
      return state;
  }
};

export default autorReducer;