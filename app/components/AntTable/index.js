/**
 *
 * StandardTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import className from 'classnames';

import { Table, Icon } from 'antd';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styles from './index.less';
import './index.css';

const initTotalList = (columns) => {
  const totalList = [];
  columns.forEach(column => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 });
    }
  });
  return totalList;
};

class AntTable extends React.Component {
  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.object,
    rowKey: PropTypes.string,
    hidePagination: PropTypes.bool,
    onSelectRow: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProp = {};

  constructor(props) {
    super(props);
    const { columns } = props;
    const needTotalList = initTotalList(columns);

    this.state = {
      selectedRowKeys: [],
      needTotalList,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    // clean state
    if (nextProps.selectedRows && (nextProps.selectedRows.length === 0)) {
      const needTotalList = initTotalList(nextProps.columns);
      return {
        selectedRowKeys: [],
        needTotalList,
      };
    }
    return null;
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    let { needTotalList } = this.state;
    needTotalList = needTotalList.map(item => ({
      ...item,
      total: selectedRows.reduce((sum, val) => sum + parseFloat(val[item.dataIndex], 10), 0),
    }));
    const { onSelectRow } = this.props;
    if (onSelectRow) {
      onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys, needTotalList });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(pagination, filters, sorter);
    }
  };

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  };

  onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }

  render() {
    const { selectedRowKeys, needTotalList } = this.state;
    const { data = {}, rowKey, hidePagination, loading, rowClassName, noTheme, ...rest } = this.props;
    const { list = [], pagination } = data;
    const rowClass = (typeof rowClassName) === 'function' ? rowClassName() : rowClassName;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
    };

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled,
      }),
    };

    return (
      <div className={className(['sampling-table', { 'main-theme': !noTheme }, styles.table])}>
        <Table
          rowKey={rowKey || 'key'}
          // rowSelection={rowSelection}
          rowClassName={
            (record, index) => className(
              rowClass,
              {
                [styles.rowOdd]: (index % 2 === 0),
                [styles.rowEven]: (index % 2 !== 0),
              }
            )
          }
          dataSource={list}
          pagination={!hidePagination ? paginationProps : false}
          onChange={this.handleTableChange}
          {...rest}
          loading={{
            indicator: (<Icon type="loading" style={{ fontSize: 28 }} spin />),
            spinning: loading,
          }}
        />
      </div>
    );
  }
}

export default AntTable;
