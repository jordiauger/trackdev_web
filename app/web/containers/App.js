import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// dumb components
import Header     from '../containers/components/Header';
import ProfessorsForm from '../containers/components/ProfessorsForm'
import HelloWorld from '../containers/components/HelloWorld';
import NavigationBar from '../containers/components/NavigationBar';
// actions
import {
  toggleColor,
} from '../../actions/actions';

/** The app entry point */
class TrackDev extends Component {
  
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <div className="react-native-web">
        <NavigationBar />
        
      </div>
    );
  }
}




/*<HelloWorld
          onClick={() => dispatch(toggleColor())}
          color={color}
        />
*/
TrackDev.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(TrackDev);
