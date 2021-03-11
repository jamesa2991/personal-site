import { connect } from 'react-redux';
import HeaderItem from '~/components/header/header-item';
import { setCurrentLocation } from '~/actions/state/location';
import { LOCATION_INFO } from '~/constants/location';

function mapStateToProps(state, ownProps) {
  const currentLocation = state.getIn(['location', 'currentLocation']);
  return {
    location: ownProps.location,
    title: LOCATION_INFO[ownProps.location].title || ownProps.location,
    currentLocation: ownProps.location === currentLocation,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentLocation: (location) => dispatch(setCurrentLocation(location)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderItem);
