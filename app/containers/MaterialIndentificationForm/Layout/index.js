import React from 'react';
import { Card, PageHeader } from 'antd';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';


/* eslint-disable react/prefer-stateless-function */
export class Layout extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const { title = '', children, ...rest } = this.props;

    return (
      <Card
        title={
          <PageHeader
            title={
              <span style={{ fontWeight: 500 }}>
                <FormattedMessage {...messages.header} />
              </span>
            }
            subTitle={title}
            style={{
              padding: 0,
            }}
          />
        }
        bordered={false}
        headStyle={{
          padding: '0 24px',
        }}
        bodyStyle={{
          padding: '24px 24px',
        }}
        {...rest}
      >
        {children}
      </Card>
    );
  }
}

export default Layout;
