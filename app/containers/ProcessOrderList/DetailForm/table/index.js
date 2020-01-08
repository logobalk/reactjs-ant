import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Dropdown } from 'antd';
// import classNames from 'classnames';
// import styles from './index.less';

// import history from 'utils/history';
import Table from 'components/AntTable';
import defaultColumns from './columns';
import { data as mock } from './mockdata';
// import styles from '../../index.less';

const paginateOptions = {
  showQuickJumper: false,
};

class ProcessOrderListTable extends React.PureComponent {
  static propTypes = {};

  static defaultProp = {};

  state = {
    loading: false,
    selectedRows: [],
    // data: {
    //   list: mock,
    //   pagination: {
    //     // total: 35,
    //     ...paginateOptions,
    //   },
    // },
  };

  handleSelectRows = () => { }

  handleStandardTableChange = (pagination, filtersArg, sorter) => { }


  render() {
    const { data = mock, columns = defaultColumns, ...rest } = this.props;
    const { loading, selectedRows } = this.state;

    return (
      <div>
        <Table
          selectedRows={selectedRows}
          loading={loading}
          data={{
            list: data,
            pagination: {
              // total: 35,
              ...paginateOptions,
            },
          }}
          columns={columns}
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

export default ProcessOrderListTable;
