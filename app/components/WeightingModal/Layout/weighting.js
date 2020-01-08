import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';

const cardStyle = {
  padding: '8px 12px',
};

class WeightingLayout extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  static defaultProp = {
    data: {},
  };

  renderListItem = (title, value) => (
    <div className="ant-list-item" style={{ padding: '8px 0' }}>
      <div className="ant-list-item-meta">
        <div className="ant-list-item-meta-content">
          <h4 className="ant-list-item-meta-title">{title}</h4>
        </div>
      </div>
      <div className="ant-list-item-content">{value}</div>
    </div>
  )

  render() {
    const { data } = this.props;

    return (
      <Row gutter={12}>
        <Col xs={12}>
          <Card bodyStyle={cardStyle}>
            <div className="ant-spin-container">
              {this.renderListItem('APC', data['APC:'])}
              {this.renderListItem('BAC', data['BAC:'])}
              {this.renderListItem('ID', data.ID)}
              {this.renderListItem('Mod.', data['Mod.'])}
              {this.renderListItem('SerNo.', data['SerNo.'])}
            </div>
          </Card>
        </Col>
        <Col xs={12}>
          <Card bodyStyle={cardStyle}>
            <div className="ant-spin-container">
              {this.renderListItem('Weight Time', data.time)}
              {this.renderListItem('Net Weight', data.net ? `${data.net.value} ${data.net.unit}` : '')}
              {this.renderListItem('Tare Weight', data.tare ? `${data.tare.value} ${data.tare.unit}` : '')}
              {this.renderListItem('Gross Weight', data.gross ? `${data.gross.value} ${data.gross.unit}` : '')}
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default WeightingLayout;