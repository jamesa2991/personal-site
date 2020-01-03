import { Map } from 'immutable';
import * as actionTypes from '~/constants/actionTypes/location';
import { BIO } from '~/constants/location';

export const initialState = Map({
  currentLocation: BIO,
});

export default function Location(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_LOCATION:
      return state.set('currentLocation', action.location);
    default:
      return state;
  }
}
