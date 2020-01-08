import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Dropdown } from 'antd';
// import classNames from 'classnames';
// import styles from './index.less';

import history from 'utils/history';
import Table from 'components/AntTable';
import { data as mock } from './mockdata';
import styles from '../index.less';

const paginateOptions = {
  showQuickJumper: false,
};

class IncidentTable extends React.PureComponent {
  static propTypes = {
    // handleSelectRows: PropTypes.func.isRequired,
  };

  static defaultProp = {};

  state = {
    loading: false,
    selectedRows: [],
    data: {
      list: mock,
      pagination: {
        total: 10,
        ...paginateOptions,
      },
    },
  };

  handleStandardTableChange = (pagination, filtersArg, sorter) => { }

  handleSelectRows = () => { }

  // goToDetail = () => {
  //   const { handleSelectRows } = this.props;
  //   handleSelectRows();
  // }

  render() {
    const { columns } = this.props;
    const { loading, selectedRows, data, ...rest } = this.state;
    // const { handleSelectRows } = this.props;
    return (
      <div>
        <Table
          selectedRows={selectedRows}
          loading={loading}
          data={data}
          columns={columns}
          rowClassName={() => styles.row}
          // onRow={() => ({
          //   onClick: handleSelectRows(),
          // })}
          onSelectRow={this.handleSelectRows}
          onChange={this.handleStandardTableChange}
          // scroll={{ x: 1200 }}
          rowKey="id"
          {...rest}
        />
      </div>
    );
  }
}

export default IncidentTable;
