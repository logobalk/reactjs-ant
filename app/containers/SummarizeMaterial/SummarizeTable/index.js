import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import className from 'classnames';
import MaterialGradeFilterBar from 'components/MaterialGradeFilterBar';
import Table from 'components/AntTable';
import defaultColumn from './columns';
// import { data as mock } from './mockdata';
import './index.css';

const paginateOptions = {
  showQuickJumper: false,
};


class SummarizeTable extends Component {

  static propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    width: PropTypes.number,
    withNoFilter: PropTypes.bool,
    components: PropTypes.object,
  };

  static defaultProps = {};

  state = {
    loading: false,
    selectedRows: [],
    // data: {
    //   list: mock,
    //   pagination: {
    //     total: 35,
    //     ...paginateOptions,
    //   },
    // },
  };

  handleSelectRows = () => { }

  handleStandardTableChange = (pagination, filtersArg, sorter) => { }

  render() {
    const { loading, selectedRows } = this.state;
    const { width = 1200, withNoFilter, components } = this.props;
    const data = {
      list: this.props.data,
      pagination: {
        // total: 35,
        ...paginateOptions,
      },
    };
    const columns = (this.props.columns && this.props.columns.length) ? this.props.columns : defaultColumn;

    return (
      <Fragment>
        {!withNoFilter && <MaterialGradeFilterBar data={[1]} />}
        <Table
          selectedRows={selectedRows}
          loading={loading}
          data={data}
          columns={columns}
          onSelectRow={this.handleSelectRows}
          onChange={this.handleStandardTableChange}
          scroll={{ x: width }}
          rowKey="seqNo"
          className="summarizeMaterialTable"
          components={components}
          bordered
        />
      </Fragment>
    );
  }
}

export default SummarizeTable;