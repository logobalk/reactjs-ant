import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';
import History from '@material-ui/icons/History';
// import Menu from '@material-ui/core/Menu';
import history from 'utils/history';
import {
  Layout, Menu, Icon,
  Card, Avatar, Popover,
} from 'antd';
import styles from './navigator.styles';
import Logo from '../../images/SB_Logo2.png';
import imageLogo from '../../images/user-img-background-1.png';
import userImg from '../../images/avatar.jpg';
import './navigator.css';

// function Navigator(props) {
class NavigatorBar extends React.Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    setStateMenuItem: PropTypes.func.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedMenuItem: PropTypes.object.isRequired,
    menuOpen: PropTypes.bool.isRequired,
    // isMobile: PropTypes.bool.isRequired,
    collapsed: PropTypes.bool.isRequired,
    setMenuItems: PropTypes.func.isRequired,
    // setIsMobile: PropTypes.func.isRequired,
    setStateMenuAction: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  };

  changeActiveMenu = param => e => {
    // param is the argument you passed to the function
    // e is the event object that returned
    const { setStateMenuItem, menuItems } = this.props;
    const root = menuItems.find(item => item.id === param.id);
    const newItem = root.children.find(item => item.id === param.childId);
    const selectedMenuItem = {
      key: param.childId,
      item: newItem,
    };
    history.push(param.path ? param.path : '/');
    setStateMenuItem(selectedMenuItem);
  };

  handleClick = param => e => {
    const { menuItems, setMenuItems } = this.props;
    const items = [];
    menuItems.forEach(element => {
      const item = element;
      if (item.id === param.id) {
        item.open = !param.open;
      }
      items.push(item);
    });
    setMenuItems(items);
  };

  componentDidMount() {
    // window.addEventListener('resize', this.resize.bind(this));
    // this.resize();
  }

  resize() {
    // const { setIsMobile } = this.props;
    // setIsMobile(window.innerWidth <= 760);
  }

  handleDrawerToggleClose = () => {
    const { setStateMenuAction } = this.props;
    setStateMenuAction(false);
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes, menuItems, selectedMenuItem, menuOpen, isMobile, collapsed } = this.props;
    const { pathname } = this.props.location;
    const {
      Sider,
    } = Layout;
    const logItem = [{
      id: 'Chagnelogs',
      rootIcon: <History />,
      open: false,
      children: [],
    }];
    // side menu //#endregion
    const { SubMenu } = Menu;
    const rootMenu = (
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[pathname]}
      >
        {menuItems.map(({ id,  children, rootIcon, open, display }) => (
          <SubMenu
            key={id}
            selected={selectedMenuItem.key === id}
            title={<span><Icon type={rootIcon} /><span>{display}</span></span>}
          >
            {children.map(({ path, childDisplay }) => (
              <Menu.Item
                onClick={this.changeActiveMenu({ id, path })}
                key={path}
              >{childDisplay}</Menu.Item>
            ))}

          </SubMenu>
        ))}
      </Menu>
    );
    const { Meta } = Card;
    return (
      <React.Fragment>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" height="48px" width="auto" />
          {!collapsed && <span className={classes.span}>Sampling & Dispensing</span>}
        </div>
        <Card bordered={false} bodyStyle={{ padding: 21 }} style={{ borderBottom: '1px solid #e8e8e8', backgroundImage: `url(${imageLogo})`, backgroundSize: 'cover' }} >
          {
            !collapsed ?
              <Avatar
                size="large"
                src={userImg}
              />
              :
              <Popover
                placement="rightTop"
                content={
                  <Fragment>
                    <div className="ant-card-meta-title">Suphannee Pr</div>
                    <p />
                    <div className="ant-card-meta-description">Logistic Scientist</div>
                  </Fragment>
                }
                overlayClassName="avatar-popover">
                <Avatar
                  size="large"
                  src={userImg}
                />
              </Popover>
          }
          <Meta
            style={{ paddingTop: '1em', color: 'red' }}
            title={menuOpen && 'Suphannee Pr'}
            description={menuOpen && 'Logistic Scientist'}
          />
        </Card>
        {rootMenu}
      </React.Fragment>
    );
  }

}

export default compose(
  withStyles(styles),
  withRouter,
)(NavigatorBar);
