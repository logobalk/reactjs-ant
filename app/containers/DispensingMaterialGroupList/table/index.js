import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Dropdown } from 'antd';
// import classNames from 'classnames';
// import styles from './index.less';

import history from 'utils/history';
import Table from 'components/AntTable';
import columns from './columns';
import { data as mock } from './mockdata';
import styles from '../index.less';

const paginateOptions = {
  showQuickJumper: false,
};

class ProcessOrderSelectionTable extends React.PureComponent {
  static propTypes = {};

  static defaultProp = {};

  state = {
    loading: false,
    selectedRows: [],
    data: {
      list: mock,
      pagination: {
        // total: 35,
        ...paginateOptions,
      },
    },
  };

  handleSelectRows = () => {}

  handleStandardTableChange = (pagination, filtersArg, sorter) => { }

  goToDetail = () => {
    history.push('/dispensing-group/detail');
  }

  render() {
    const { loading, selectedRows, data } = this.state;

    return (
      <div>
        <Table
          selectedRows={selectedRows}
          loading={loading}
          data={data}
          columns={columns}
          rowClassName={() => styles.row}
          onRow={() => ({
            onClick: () => { this.goToDetail(); },
          })}
          onSelectRow={this.handleSelectRows}
          onChange={this.handleStandardTableChange}
          // scroll={{ x: 1200 }}
          rowKey="id"
        />
      </div>
    );
  }
}

export default ProcessOrderSelectionTable;
