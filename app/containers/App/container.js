import React, { Fragment } from 'react';
import PropTypes, { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import LoginPage from 'containers/LoginPage/Loadable';
import injectSaga from 'utils/injectSaga';
import CookieUtil from 'utils/cookieUtil';
import TokenChecker from 'utils/tokenChecker';
import { Modal } from 'antd';
import { RippleLoader } from 'components/Loader';
import { ProtectedRoute, LoginRoute } from './protectedRoute';
import saga from './saga';
import MainApp from './MainApp';

import {
  loadRepos,
  reposLoaded,
  repoLoadingError,
  setStateMenuAction,
  logout,
  setAuth as setAuthAction,
  setCheckToken as setCheckTokenAction,
} from './actions';
import { makeSelectAuth, makeSelectOpenMenu } from './selectors';
import { tokenOrigin, tokenTimeout, TOKEN, SSO_IFRAME_NAME, SSO_IFRAME_URL } from './constants';
import styles from './container.less';

let timeout;

class Container extends React.Component {
  static propTypes = {
    auth: PropTypes.object,
    actions: PropTypes.object,
    cookies: instanceOf(Cookies).isRequired,
  };

  componentWillUnmount() {
    this.removeListener();
  }

  componentWillMount() {
    this.checkAuthorization(false); // for dev environment
  }

  checkAuthorization(isCheck) {
    if (isCheck) {
      this.creatSSOIframe();
    } else {
      this.checkTokenWithNoIFrame();
    }
  }

  creatSSOIframe = () => {
    // check exist iframe
    const checkIframe = document.getElementById(SSO_IFRAME_NAME);
    if (checkIframe) {
      this.checkToken();
      return;
    }

    const iframe = document.createElement('iframe');
    iframe.setAttribute('id', SSO_IFRAME_NAME); // assign an id
    iframe.setAttribute('title', SSO_IFRAME_NAME);
    iframe.setAttribute('src', SSO_IFRAME_URL);
    iframe.setAttribute('style', 'display:none');
    document.body.appendChild(iframe);

    // const iframe = document.getElementById('sso-iframe');
    // console.log(iframe);
    if (iframe.attachEvent) { // handle iframe onload on IE
      iframe.attachEvent('onload', () => {
        this.checkToken();
      });
    } else {
      iframe.onload = () => { // handle iframe onload on non-IE
        this.checkToken();
      };
    }
  }

  checkToken = () => {
    const { setAuth } = this.props.actions;
    const { cookies } = this.props;

    // get token for cookie
    const token = cookies.get(TOKEN);
    if (token) {
      setAuth(true);
    }

    // post message to iframe for check token
    try {
      // init timeout and check token parameter
      const { setCheckToken } = this.props.actions;
      setCheckToken(false);
      clearTimeout(timeout);
      window.addEventListener('message', this.receiveToken, false);
      TokenChecker.getToken(tokenOrigin);
    } catch (err) {
      this.handleTokenIframeError();
    }

    // handle when call token iframe timeout
    timeout = setTimeout(() => {
      const { isCheckToken } = this.props.auth;
      if (!isCheckToken) {
        this.handleTokenIframeError();
      }
    }, tokenTimeout);
  };

  checkTokenWithNoIFrame = () => {
    const { setAuth, setCheckToken } = this.props.actions;
    const { cookies } = this.props;

    setCheckToken(true);
    // get token for cookie
    const token = cookies.get(TOKEN);
    if (token) {
      setAuth(true);
    }

  };

  handleTokenIframeError = () => {
    const { setCheckToken } = this.props.actions;
    // 0. clear timeout
    clearTimeout(timeout);

    // 1. remove message event listener
    this.removeListener();

    // 2. show error infomation
    Modal.error({
      title: 'Can\'t connect to token server!',
      onOk: () => {
        // 3. set check token completed
        // this.setState({ isCheckToken: true });
        setCheckToken(true);
      },
    });

  }

  receiveToken = (e) => {
    const { token, appOrigin } = e.data;
    const { origin } = window.location;
    // check receive origin from iframe
    if (origin.indexOf(appOrigin) < 0) {
      return;
    }
    // console.log('recieve token', e);
    clearTimeout(timeout);
    const { cookies } = this.props;
    const { setAuth, setCheckToken } = this.props.actions;
    const tokenLocal = cookies.get(TOKEN);
    if (token) {
      setAuth(true);
      if (!tokenLocal) {
        CookieUtil.setCookie(TOKEN, token);
      }
    } else {
      CookieUtil.removeCookie(TOKEN);
      setAuth(false);
    }
    setCheckToken(true);
    // this.setState({ isCheckToken: true });
  }

  removeListener = () => {
    window.removeEventListener('message', () => { });
  }

  renderLoader = () => (
    <div className={styles.loader}>
      <div>
        <div>
          <RippleLoader />
        </div>
      </div>
    </div>
  )

  render() {
    const { isAuthenticated, isCheckToken } = this.props.auth;

    return (
      <Fragment>
        {!isCheckToken
          ?
          this.renderLoader()
          :
          <Switch>
            <LoginRoute exact path="/login" component={LoginPage} {...{ isAuthenticated }} />
            <ProtectedRoute component={MainApp} {...{ isAuthenticated, ...this.props }} />
          </Switch>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
  menuOpen: makeSelectOpenMenu(),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadRepos,
    reposLoaded,
    repoLoadingError,
    setStateMenuAction,
    logout,
    setAuth: setAuthAction,
    setCheckToken: setCheckTokenAction,
  }, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withSaga = injectSaga({ key: 'global', saga });

export default withCookies(
  compose(
    withRouter,
    withConnect,
    withSaga,
  )(Container)
);
