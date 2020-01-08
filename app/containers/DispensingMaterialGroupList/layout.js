import React from 'react';
import PropTypes from 'prop-types';
import { Card, PageHeader } from 'antd';

class Layout extends React.Component {
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
    const { title = '', description = '', children } = this.props;

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
      >
        {children}
      </Card>
    );
  }
}

export default Layout;