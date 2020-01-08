/**
 *
 * SamplingProcess
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import QueueAnim from 'rc-queue-anim';
import { Card, PageHeader, Button } from 'antd';

import history from 'utils/history';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Layout extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};


  render() {
    const { title = '', withBackBtn, children, extra } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>Sampling Process | Sampling & Dispensing</title>
        </Helmet>
        <Card
          title={
            <PageHeader
              title={<span style={{ fontWeight: 500 }}><FormattedMessage {...messages.header} /></span>}
              subTitle={title}
              style={{
                padding: 0,
              }}
            />
          }
          bordered={false}
          headStyle={{
            padding: '0 24px 0 32px',
          }}
          bodyStyle={{
            padding: '24px 24px',
          }}
          extra={
            <Fragment>
              {withBackBtn &&
                <QueueAnim>
                  <Button key="1" icon="arrow-left" onClick={() => { history.push('/sampling-process'); }}>Back</Button>
                </QueueAnim>
              }
              {extra}
            </Fragment>
          }
        >
          {children}
        </Card>
      </Fragment>
    );
  }
}

export default Layout;
