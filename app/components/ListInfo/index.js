/**
 *
 * ListInfo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Row, Col, Card, List, Divider } from 'antd';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styles from './index.less';

const colInfo = {
  xs: 24,
  sm: 24,
  md: 12,
};
const cardProps = {
  bodyStyle: {
    padding: '0px 24px',
  },
  bordered: false,
};
class ListInfo extends React.Component {
  static propTypes = {};

  static defaultProp = {};

  render() {
    const { list = [] } = this.props;

    return (
      <Row className={styles.list}>
        <Col {...colInfo}>
          <Card
            {...cardProps}
          >
            <List
              itemLayout="horizontal"
              dataSource={list[0] || []}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <div className={styles.divider}>
          <Divider type="vertical" style={{ height: '100%', margin: 0 }} />
        </div>
        <div className={styles.divider2}>
          <Divider style={{ margin: 0 }} />
        </div>
        <Col {...colInfo}>
          <Card {...cardProps}>
            <List
              itemLayout="horizontal"
              dataSource={list[1] || []}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ListInfo;
