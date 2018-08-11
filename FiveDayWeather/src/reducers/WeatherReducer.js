import { FETCH_WEATHER, FETCH_ERROR } from '../actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    default:
      return state;
  }
}