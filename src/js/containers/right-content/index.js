import { connect } from 'react-redux';
import RightContent from '~/components/right-content';

function mapStateToProps(state, ownProps) {
  return {
    currentLocation: state.getIn(['location', 'currentLocation']),
  };
}

export default connect(mapStateToProps)(RightContent);
