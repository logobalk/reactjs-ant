import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';
import Table from 'components/AntTable';

const mock = [
  { id: 1, value: '20.830 g' },
  { id: 2, value: '20.830 g' },
  { id: 3, value: '20.830 g' },
  { id: 4, value: '20.830 g' },
  { id: 5, value: '20.830 g' },
];

const columns = [
  {
    title: 'Component',
    dataIndex: 'id',
    key: 'component',
  }, {
    title: 'Weight Value',
    dataIndex: 'value',
    key: 'value',
  },
];

const cardStyle = {
  padding: '8px 12px',
};

class StatisticsLayout extends Component {
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
        <Col xs={8}>
          <Card bodyStyle={cardStyle}>
            <div className="ant-spin-container">
              {/* {this.renderListItem('APC', data['APC:'])}
              {this.renderListItem('BAC', data['BAC:'])}
              {this.renderListItem('ID', data.ID)}
              {this.renderListItem('Mod.', data['Mod.'])}
              {this.renderListItem('SerNo.', data['SerNo.'])} */}
              {this.renderListItem('APC', '01-70-02')}
              {this.renderListItem('BAC', '00-50-02')}
              {this.renderListItem('ID', 'SRI')}
              {this.renderListItem('Mod.', 'SECURA3102-1S')}
              {this.renderListItem('SerNo.', '0031510688')}
            </div>
          </Card>
        </Col>
        <Col xs={8}>
          <Card bodyStyle={cardStyle}>
            <div className="ant-spin-container">
              {this.renderListItem('Number of components (n)', '5')}
              {this.renderListItem('Average (x)', '20.830g')}
              {this.renderListItem('Standard deviation (s)', '0.000g')}
              {this.renderListItem('Variation coefficient (sRel).', '0.00%')}
              {this.renderListItem('Total (Sum).', '20.83 g')}
              {this.renderListItem('Minimum (Min).', '20.83 g')}
              {this.renderListItem('Maxumum (Max).', '20.83 g')}
              {this.renderListItem('Spread (Diff).', '0.00 g')}
            </div>
          </Card>
        </Col>
        <Col xs={8}>
          <Table
            selectedRows={[]}
            loading={false}
            data={{ list: mock }}
            hidePagination
            columns={columns}
            onSelectRow={() => { }}
            onChange={() => { }}
            // scroll={{ y: 300 }}
            rowKey="id"
            size="small"
          />
        </Col>
      </Row>
    );
  }
}

export default StatisticsLayout;