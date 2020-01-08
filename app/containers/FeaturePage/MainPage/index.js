/**
 *
 * MainPage
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import TableHead from '@material-ui/core/TableHead';
// import styled from 'styled-components';

import messagesData from './messages';
import styles from './mainpage.style';

let counter = 0;
function createData(name, calories, fat) {
  counter += 1;
  return { id: counter, name, calories, fat };
}

class MainPage extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  static defaultProp = {};

  state = {
    rows: [
      createData('Cupcake', 305, 3.7),
      createData('Donut', 452, 25.0),
      createData('Eclair', 262, 16.0),
      createData('Frozen yoghurt', 159, 6.0),
      createData('Gingerbread', 356, 16.0),
      createData('Honeycomb', 408, 3.2),
      createData('Ice cream sandwich', 237, 9.0),
      createData('Jelly Bean', 375, 0.0),
      createData('KitKat', 518, 26.0),
      createData('Lollipop', 392, 0.2),
      createData('Marshmallow', 318, 0),
      createData('Nougat', 360, 19.0),
      createData('Oreo', 437, 18.0),
    ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
    page: 0,
    rowsPerPage: 5,
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
    const CustomTableCell = withStyles(theme => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper} >
          <Table className={classes.table} >
            <TableHead>
              <TableRow>
                <CustomTableCell></CustomTableCell>
                <CustomTableCell>Dessert (100g serving)</CustomTableCell>
                <CustomTableCell >Calories</CustomTableCell>
                <CustomTableCell >Fat (g)</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                <TableRow key={row.id}>
                  <TableCell padding="Avatar">
                    <Avatar className={classes.pinkAvatar} >
                      <CheckIcon />
                    </Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell >{row.calories}</TableCell>
                  <TableCell >{row.fat}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                // ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper >
      // <List component="nav" className={classes.root}>
      //   {messagesData && messagesData.map(message => (
      //     <div key={message.id}>
      //       <ListItem key={message.id} button>
      //         <ListItemText key={message.id} primary={message.primary} />
      //       </ListItem>
      //       <Divider />
      //     </div>
      //   ))}
      // </List>
    );
  }
}

export default withStyles(styles)(MainPage);
