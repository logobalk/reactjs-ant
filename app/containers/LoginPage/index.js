/**
 *
 * LoginPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { Helmet } from 'react-helmet';
import { Card, Row, Col, Form, Icon, Input, Button } from 'antd';

import coverImg from 'images/SB_Cover.png';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as LoginActions from './actions';
import messages from './messages';
import styles from './index.less';
import './index.css';

const FormItem = Form.Item;

const gridStyle = {
  xs: 24,
  sm: 24,
  md: 12,
};

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    this.init();
    // window.addEventListener('message', this.receiveMessage, false);
  }

  // receiveMessage = (e) => {
  //   console.log(e);
  // }

  init() {
    const { setDefault } = this.props.actions;
    setDefault();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.handleLogin(values);
      }
    });
  }

  handleLogin = (user) => {
    const { login } = this.props.actions;
    login();
  }

  render() {
    const { loading } = this.props.loginPage;
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={styles.login}>
        <Helmet>
          <title>Login | Sampling & Dispensing</title>
        </Helmet>
        <div className={styles.div}>
          <Card
            className={styles.card}
            bodyStyle={{
              padding: 0,
            }}
          >
            <Row className={styles.row}>
              <Col {...{ ...gridStyle }} className={`${styles.col1} ${styles.img}`}>
                <img src={coverImg} alt="sp_cover" style={{ width: '100%' }} />
              </Col>
              <Col {...{ ...gridStyle }} className={styles.col2}>
                <p className={styles.title}><FormattedMessage {...messages.header} /></p>
                <Form onSubmit={this.handleSubmit} className={styles.form}>
                  <FormItem>
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: 'Please input your Username!' }],
                    })(
                      <Input
                        prefix={<Icon type="user" />}
                        size="large"
                        name="username"
                        placeholder="Username"
                        className={styles.input}
                        disabled={loading}
                      />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                      <Input.Password
                        prefix={<Icon type="lock" />}
                        size="large"
                        name="password"
                        type="password"
                        placeholder="Password"
                        className={styles.input}
                        disabled={loading}
                      />
                    )}
                  </FormItem>
                  <FormItem>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className={styles.button}
                      loading={loading}
                    >
                      Login
                    </Button>
                    <div style={{ textAlign: 'center', lineHeight: '20px', marginTop: 0 }}>
                      {/* <div style={{ lineHeight: '20px' }}>DEV V0.0.1</div> */}
                      <div style={{ lineHeight: '20px' }}>(Hint : Use any username and password)</div>
                    </div>
                  </FormItem>
                </Form>
              </Col>
            </Row>
            <Row style={{ textAlign: 'center', marginBottom: 10 }}>
              <p>DEV (Prototype) V0.0.2</p>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(LoginActions, dispatch),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  Form.create(),
)(LoginPage);
