/**
 *
 * MaterialGradeFilterBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Row, Col, Button, Badge, Select } from 'antd';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styles from './index.less';

const { Option } = Select;
const badgeStyles = {
  borderRadius: 3,
  marginLeft: 10,
  background: '#fff',
  color: '#222',
};
class MaterialGradeFilterBar extends React.Component {
  static propTypes = {
    data: PropTypes.array,
  };

  static defaultProp = {};

  render() {
    const { data = [] } = this.props;

    return (
      <Row gutter={12} style={{ padding: '0px 5px 10px 5px' }}>
        <Col xs={24} sm={6}>
          <Button type="primary" className={styles.btn1} block>
            <div style={{ display: 'inline-block', paddingTop: 1 }}>Grade A</div>
            <Badge count={data.length > 0 ? 5 : 0} showZero style={badgeStyles} />
          </Button>
        </Col>
        <Col xs={24} sm={6}>
          <Button type="primary" className={styles.btn2} block>
            <div style={{ display: 'inline-block', paddingTop: 1 }}>Grade C</div>
            <Badge count={data.length > 0 ? 25 : 0} showZero style={badgeStyles} />
          </Button>
        </Col>
        <Col xs={24} sm={6}>
          <Button type="primary" className={styles.btn3} block>
            <div style={{ display: 'inline-block', paddingTop: 1 }}>Grade D</div>
            <Badge count={data.length > 0 ? 10 : 0} showZero style={badgeStyles} />
          </Button>
        </Col>
        <Col xs={24} sm={6}>
          {/* <Select
            defaultValue="all"
            placeholder="--Material Grade--"
            style={{ width: '100%' }}
          >
            <Option value="all">All Grade</Option>
            <Option value="a">A</Option>
            <Option value="c">C</Option>
            <Option value="d">D</Option>
          </Select> */}
          <div
            style={{
              padding: '5px 10px 5px 10px',
              border: '1px solid #e8e8e8',
              borderRadius: 2,
            }}>
            <span>Current Grade</span>
            <b style={{ float: 'right' }}>A</b>
          </div>
        </Col>
      </Row>
    );
  }
}

export default MaterialGradeFilterBar;
