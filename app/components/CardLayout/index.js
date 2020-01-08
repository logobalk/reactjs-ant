/**
 *
 * CardLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card, PageHeader } from 'antd';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import './index.css';

class CardLayout extends React.Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  };

  static defaultProps = {};

  render() {
    const { title = '', description = '', children, ...rest } = this.props;

    return (
      <Card
        title={
          <PageHeader
            title={
              <span style={{ fontWeight: 500 }}>
                {title}
              </span>
            }
            subTitle={description}
            style={{
              padding: 0,
            }}
          />
        }
        bordered={false}
        bodyStyle={{
          // padding: '24px 24px',
        }}
        className="card-layout"
        {...rest}
      >
        {children}
      </Card>
    );
  }
}

export default CardLayout;
