import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import history from 'utils/history';

import uuid from 'uuid';
import styles from './TablePaging.styles';
import TablePaginationActions from './pagination';

class TablePaging extends React.Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    dataRows: PropTypes.shape().isRequired,
    // selectedRowDetails: PropTypes.shape(),
    selectTableRowDetails: PropTypes.func.isRequired,
    tableColumns: PropTypes.shape(),
    path: PropTypes.string,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    setRowsPerPage: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    unselectTableRowDetails: PropTypes.func.isRequired,
  };

  static defaultProps = {
    tableColumns: null,
    // selectedRowDetails: {},
  }

  handleClose = () => {
    const {
      unselectTableRowDetails,
    } = this.props;
    unselectTableRowDetails();
  };

  handleChangeRowsPerPage = (event) => {
    const {
      setRowsPerPage,
    } = this.props;
    setRowsPerPage(event.target.value);
  };

  handleChangePage = (event, page) => {
    const {
      setPage,
    } = this.props;
    setPage(page);
  };

  handleSelectedRow(row) {
    return () => {
      const {
        selectTableRowDetails,
        path,
      } = this.props;
      // push(`${history.location.pathname}?${queryString.stringify(query)}`);
      // history.push(path);
      const selectedRowDetails = row;
      selectTableRowDetails({ selectedRowDetails });
    };
  }

  render() {
    const {
      classes,
      dataRows,
      tableColumns,
      rowsPerPage,
      page,
    } = this.props;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage,
      dataRows.rows.length - page * rowsPerPage);
    const columnsSize = tableColumns && tableColumns.columns ? tableColumns.columns.length : 1;
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead >
              <TableRow >
                {tableColumns && tableColumns
                  && tableColumns.columns.map(column => column.enabled && (
                    <TableCell className={classes.tableHeader} key={uuid.v4()}>
                      {column.display}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataRows && dataRows.rows.length > 0
                && dataRows.rows.slice(page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage).map(row => (
                  <TableRow hover key={uuid.v4()} style={{ backgroundColor: 'white' }}>
                    {tableColumns.columns.map(column => column.enabled
                        && (
                          <React.Fragment key={uuid.v4()}>
                            {column.id !== 'evaluate' && (
                              <TableCell key={uuid.v4()} >
                                {
                                  row[column.id] === true && column.id === 'recording' ? (
                                    <TextField
                                      key={uuid.v4()}
                                      id="standard-bare"
                                      className={classes.textField}
                                      margin="normal"
                                    />
                                  ) : <div>{row[column.id]}</div>
                                }


                              </TableCell>
                            )}
                            {row.switchData && row.switchData.isSwitch && column.id === 'evaluate' && (
                              <TableCell key={uuid.v4()} >
                                <FormControlLabel
                                  control={
                                    <Switch
                                      checked
                                      // checked={this.state.checkedB}
                                      // onChange={this.handleChange('checkedB')}
                                      key={uuid.v4()}
                                      value="checkedA"
                                      classes={{
                                        switchBase: row.switchData.value && classes.colorSwitchBase,
                                        checked: row.switchData.value && classes.colorChecked,
                                        bar: row.switchData.value && classes.colorBar,
                                      }}
                                      color="secondary"
                                    />
                                  }
                                  label={row.switchData.value ? 'Pass' : 'Failed'}
                                />
                              </TableCell>
                            )}
                            {row.checkboxData && row.checkboxData.isCheckbox && column.id === 'evaluate' && (
                              <TableCell key={uuid.v4()} >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked
                                      // onChange={this.handleChange('checkedB')}
                                      key={uuid.v4()}
                                      value="checkedB"
                                      color={row.checkboxData.value ? 'default' : 'secondary'}
                                      classes={{
                                        root: classes.rootCheckBox,
                                        checked: classes.checked,
                                      }}
                                    />
                                  }
                                  label={row.checkboxData.value ? 'Pass' : 'Failed'}
                                />
                              </TableCell>
                            )}
                          </React.Fragment>
                        ))}
                  </TableRow>
                ))}
              {dataRows.rows && dataRows.rows.length < 1 && (
                <TableRow hover key={uuid.v4()}>
                  <TableCell
                    key={uuid.v4()}
                    className={classes.noRecordFound}
                    colSpan={columnsSize}
                  >
                    No record found.
                  </TableCell>
                </TableRow>
              )}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={columnsSize} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow className={classes.table}>
                <TablePagination
                  key={uuid.v4()}
                  style={{ backgroundColor: 'white' }}
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={columnsSize}
                  count={dataRows.rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}
export default withStyles(styles)(TablePaging);
