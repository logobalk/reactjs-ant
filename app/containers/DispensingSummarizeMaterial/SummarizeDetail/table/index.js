import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import className from 'classnames';
import EditableTable from 'components/AntTable/editable';
import defaultColumns from './columns';

// import { data as mock } from './mockdata';


const paginateOptions = {
  showQuickJumper: false,
};

class SummarizeListTable extends Component {

  static propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
    tableOptions: PropTypes.object,
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
    const { tableOptions = {} } = this.props;
    const columns = this.props.columns || defaultColumns;
    const data = {
      list: this.props.data,
      pagination: {
        // total: 35,
        ...paginateOptions,
      },
    };

    return (
      <Fragment>
        <EditableTable
          columns={columns}
          data={data}
          scroll={{ x: 1000 }}
          rowKey="id"
          loading={false}
          {...tableOptions}
        />
      </Fragment>
    );
  }
}

export default SummarizeListTable;