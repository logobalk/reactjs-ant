import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Row, Col, Button, Select, Input } from 'antd';
// import classNames from 'classnames';
// import styles from './index.less';

import history from 'utils/history';
import Table from 'components/AntTable';
import columns from './columns';
import { data as mock } from './mockdata';

// const { Option } = Select;
const paginateOptions = {
  showQuickJumper: false,
};

class IncidentTable extends React.PureComponent {
  static propTypes = {};

  static defaultProp = {};

  state = {
    loading: false,
    selectedRows: [],
    data: {
      list: mock,
      pagination: {
        total: 35,
        ...paginateOptions,
      },
    },
  };

  handleSelectRows = () => { }

  handleStandardTableChange = (pagination, filtersArg, sorter) => { }

  goToDetail = () => {
    history.push('/material-identification/detail');
  }

  render() {
    const { loading, selectedRows, data } = this.state;

    return (
      <div>
        {/* <Row gutter={12}>
          <Col md={11}>
            <Select
              placeholder="Filter by Status"
              style={{ width: '100%' }}
            >
              <Option value="1">Transferred</Option>
              <Option value="2">Rejected</Option>
              <Option value="3">Pending</Option>
            </Select>
          </Col>
          <Col md={11}>
            <Input />
          </Col>
          <Col md={2}><Button type="primary" icon="filter" style={{ width: '100%' }}>Filter</Button></Col>
        </Row>
        <p /> */}
        <Table
          selectedRows={selectedRows}
          loading={loading}
          data={data}
          columns={columns}
          onRow={() => ({
            onClick: () => { this.goToDetail(); },
          })}
          onSelectRow={this.handleSelectRows}
          onChange={this.handleStandardTableChange}
          scroll={{ x: 1200 }}
          rowKey="id"
          bordered
        // hidePagination
        />
      </div>
    );
  }
}

export default IncidentTable;
