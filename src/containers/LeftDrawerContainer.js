import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LeftDrawer from '../components/LeftDrawer/LeftDrawer';

class LeftDrawerContainer extends React.Component {
  render() {
    return (
      <LeftDrawer
        state={this.props.etat}
      />
    );
  }
}

function mapStateToProps(currentState) {
  return {
    etat: currentState.etat,
  };
}

LeftDrawerContainer.propTypes = {
  etat: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(LeftDrawerContainer);

LeftDrawerContainer.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
