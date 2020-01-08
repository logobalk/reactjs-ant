
import React from 'react';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import HeaderDropdown from 'components/HeaderDropdown';
import { Icon, Menu, Modal, Button } from 'antd';
// import history from 'utils/history';
import { logout as logoutAction } from 'containers/App/actions';
import { bindActionCreators } from 'redux';

// import IconButton from '@material-ui/core/IconButton';

import styles from './otherMenu.style';

const { confirm } = Modal;

class OtherMenu extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    logout: PropTypes.func,
  };

  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOnMenuClick = () => {

  }


  goToLogin = () => {
    const { logout } = this.props;
    confirm({
      title: 'Do you want to logout?',
      onOk() {
        logout();
      },
      onCancel() { },
    });
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const ITEM_HEIGHT = 48;
    const open = Boolean(anchorEl);
    const options = ['None', 'Atria', 'Callisto', 'Dione', 'Ganymede'];
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.handleOnMenuClick}>
        <Menu.Item key="userCenter">
          <Icon type="user" />
          <span>Account Setting</span>
        </Menu.Item>
        <Menu.Item key="userinfo">
          <Icon type="setting" />
          <span>Profile Setting</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" onClick={() => { this.goToLogin(); }}>
          <Icon type="logout" />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <React.Fragment>
        <Button className={classes.menuButton} shape="circle" icon="export" onClick={() => { this.goToLogin(); }} />
        {/* <IconButton className={classes.menuButton} onClick={this.handleMenu} color="inherit" aria-label="Menu">
          <div className={classes.margin}>
            <Icon type="logout" />
          </div>
        </IconButton> */}
        {/* <HeaderDropdown
          overlay={menu}
          trigger={['click']}
          overlayClassName={styles.popover}
        >
          <span style={{ display: 'inline-block' }}>
            <Icon type="setting" className={classes.menuButton} onClick={this.handleMenu} />
          </span>
        </HeaderDropdown> */}
        {/* <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              onClick={this.handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu> */}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: bindActionCreators(logoutAction, dispatch),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default withConnect(withStyles(styles)(OtherMenu));
