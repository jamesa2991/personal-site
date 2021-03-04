import * as actionTypes from '~/constants/actionTypes/location';

export const setCurrentLocation = (location) => ({
  type: actionTypes.SET_CURRENT_LOCATION,
  location,
});
