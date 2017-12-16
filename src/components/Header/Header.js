import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HeaderStyle from './Header.css';
import DrawerAction from '../../actions/DrawerAction';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullWidth: false,
      margin: '15em',
      menuOptionsColor: '#3a3a3a',
      headerColor: '#fff',
    };
    this.toggledrawer = this.toggledrawer.bind(this);
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  toggledrawer() {
    if (this.state.margin === '15em') {
      this.setState({
        fullWidth: true,
        margin: '-2em',
      });
    } else {
      this.setState({
        fullWidth: false,
        margin: '15em',

      });
    }
    this.props.dispatch(DrawerAction(this.state.fullWidth));
  }


  render() {
    return (

      <div className={HeaderStyle.headerDiv} style={{ marginLeft: this.state.margin }}>
        <AppBar
          style={{ backgroundColor: this.state.headerColor }}
          zDepth={1}
          className={HeaderStyle.headerAppBar}
          iconElementLeft={
            <IconButton className={HeaderStyle.headerMenuButton} onClick={this.toggledrawer}>
              <Menu color={this.state.menuOptionsColor} />
            </IconButton>
          }
          iconElementRight={
            <div className={HeaderStyle.headerButtonDeco}>
              <IconMenu
                color={this.state.menuOptionsColor}
                iconButtonElement={
                  <IconButton><MoreVertIcon color={this.state.menuOptionsColor} /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="Sign out" />
              </IconMenu>
            </div>
          }
        />
      </div>

    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Header);

Header.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

