import React, { PropTypes } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LeftDrawerContainer from '../containers/LeftDrawerContainer';
import HeaderContainer from '../containers/HeaderContainer';

injectTapEventPlugin();

class App extends React.Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <LeftDrawerContainer />
        <div
          style={{ marginLeft: this.props.etat ? '30em' : '15em', marginTop: '1em', marginRight: '15em', paddingRight: '1em', paddingLeft: '1em' }}
        >

          {this.props.children}
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: propTypes.object.isRequired,
};

App.propTypes = {
  etat: propTypes.bool.isRequired,
  children: PropTypes.element.isRequired,

};
function mapStateToProps(currentState) {
  return {
    etat: currentState.etat,
  };
}

export default connect(mapStateToProps)(App);
