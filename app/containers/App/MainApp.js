/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
// import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
// import classNames from 'classnames';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import {
  INSPECTION_LIST_PATH,
} from 'containers/Navigator/constants';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
import {
  Layout, Breadcrumb, Icon,
} from 'antd';
// import Logo from '../../images/SP_Logo.png';
import NavigatorBar from '../Navigator';
import routesData from './routes';
import styles from './mainApp.style';
import lessStyle from './styles.less';

import MenuHeader from './menuHeader';

class MainApp extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    menuOpen: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
  };

  handleDrawerToggleClose = () => {
    const { setStateMenuAction } = this.props.actions;
    setStateMenuAction(false);
  };

  handleDrawerToggle = () => {
    const { menuOpen } = this.props;
    const { setStateMenuAction } = this.props.actions;
    setStateMenuAction(!menuOpen);
  };

  render() {
    const { classes, menuOpen } = this.props;
    const {
      Sider,
      Content,
      Header,
    } = Layout;

    return (
      <React.Fragment>
        <Layout className={classes.appBar} style={{ minHeight: '100vh' }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={!menuOpen}
            onCollapse={this.handleDrawerToggle}
            theme="light"
            width={265}
          >
            <NavigatorBar collapsed={!menuOpen} />
          </Sider>
          <Layout>
            <Header style={{ backgroundColor: '#989292', padding: 0 }}>
              <Icon
                className={classes.trigger}
                selected
                style={{ fontSize: '1.5em' }}
                type={menuOpen ? 'menu-fold' : 'menu-unfold'}
                onClick={this.handleDrawerToggle}
              />
              {!menuOpen && <span className={lessStyle.span}>Sampling & Dispensing</span>}
              <div style={{ float: 'right', display: 'block' }}>
                <MenuHeader />
              </div>
            </Header>
            <Content style={{ margin: '0 16px 16px 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item ><Icon type="home" /></Breadcrumb.Item>
                <Breadcrumb.Item >Sampling & Dispensing</Breadcrumb.Item>
              </Breadcrumb>
              <div className={classes.appBarSpacer} >
                <Switch>
                  <Redirect exact from="/" to={INSPECTION_LIST_PATH} />
                  {routesData.create().map(({ ...props }) => (
                    <Route {...props} />
                  ))}
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(MainApp);