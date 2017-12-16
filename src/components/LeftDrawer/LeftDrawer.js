import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import AnalyticsIcon from 'material-ui-icons/Timeline';
import TrainingIcon from 'material-ui-icons/School';
import IntentIcon from 'material-ui-icons/Chat';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import LeftDrawerStyle from './LeftDrawer.css';


class LeftDrawer extends React.Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <Drawer
        open={this.props.state}
        zDepth={1}
      >
        <a href="/">
          <div className={LeftDrawerStyle.logo} />
        </a>
        <div className={LeftDrawerStyle.drawerMenu}>

          <Menu >

            <MenuItem
              primaryText="Accueil"
              leftIcon={<IntentIcon />}
              containerElement={<Link to="/" />}
              className={LeftDrawerStyle.drawerMenuItem}
            />

            <MenuItem
              primaryText="Menu 2"
              leftIcon={<TrainingIcon />}
              containerElement={<Link to="/homeAgain" />}


              className={LeftDrawerStyle.drawerMenuItem}
            />
            <MenuItem
              primaryText="Menu 3"
              leftIcon={<AnalyticsIcon />}

              className={LeftDrawerStyle.drawerMenuItem}
              containerElement={<Link to="/homeAgain" />}

            />


          </Menu>
        </div>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  state: PropTypes.bool.isRequired,
};

export default connect()(LeftDrawer);

LeftDrawer.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
