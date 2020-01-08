/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import history from 'utils/history';
import Table from 'components/AntTable';
// import TablePaging from '../../Table';
// import mainTableData from './mainTableData';
import SearchBar from './Search';
import columns from './columns';
// import styled from 'styled-components';
import styles from './inspectionList.style';
import lessStyles from './inspectionList.less';

class InspectionList extends React.Component {
  static propTypes = {
    inspectionItems: PropTypes.array,
    callTableInspectionData: PropTypes.func.isRequired,
  };

  static defaultProp = {};

  componentWillMount() {
    const { callTableInspectionData } = this.props;
    callTableInspectionData();
  }

  goToConformPage = () => {
    history.push('/conform');
  }

  render() {
    const { inspectionItems, callTableInspectionData } = this.props;
    // console.log('this.state===>', inspectionItems);
    // const mainColumns = mainTableData.tableColumns;
    // const mainRows = inspectionItems;

    return (
      <React.Fragment>
        <Helmet>
          <title>Inspection List | Sampling & Dispensing</title>
          <meta
            name="description"
            content="SIAM Pharmaceutical | Sampling & Dispensing"
          />
        </Helmet>
        <SearchBar />
        <div style={{ background: '#fff' }}>
          {/* <TablePaging
            dataRows={{
              rows: inspectionItems && Object.keys(mainRows).map(
                row => (mainRows[row]),
              ),
            }}
            tableColumns={{
              columns: mainColumns,
            }}
            rowsPerPage={5}
            page={0}
            path='conform'
          /> */}
          <Table
            selectedRows={[]}
            loading={false}
            data={{
              list: inspectionItems,
              pagination: {
                showQuickJumper: false,
                defaultPageSize: 10,
                pageSizeOptions: ['10', '20', '40'],
              },
            }}
            columns={columns}
            onSelectRow={() => { }}
            onChange={() => { }}
            scroll={{ x: 1000 }}
            rowKey="id"
            size="medium"
            rowClassName={(record, index) => lessStyles.row}
            onRow={(record, rowIndex) => ({
              onClick: (event) => { this.goToConformPage(); },       // click row
            })}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InspectionList);
