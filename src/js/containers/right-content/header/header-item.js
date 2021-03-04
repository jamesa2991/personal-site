import { connect } from 'react-redux';
import HeaderItem from '~/components/right-content/header/header-item';
import { setCurrentLocation } from '~/actions/state/location';
import { LOCATION_TITLE_MAP } from '~/constants/location';

function mapStateToProps(state, ownProps) {
  const currentLocation = state.getIn(['location', 'currentLocation']);
  return {
    location: ownProps.location,
    title: LOCATION_TITLE_MAP[ownProps.location] || ownProps.location,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentLocation: (location) => dispatch(setCurrentLocation(location)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderItem);
