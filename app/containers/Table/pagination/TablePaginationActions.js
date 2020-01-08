import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { withStyles } from '@material-ui/core/styles';
import styles from './TablePaginationActions.styles';

class TablePaginationActions extends React.Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    theme: PropTypes.shape().isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  handleFirstPageButtonClick =(event) => {
    const {
      onChangePage,
    } = this.props;
    onChangePage(event, 0);
  };

  handleBackButtonClick = (event) => {
    const {
      onChangePage,
      page,
    } = this.props;
    onChangePage(event, page - 1);
  };

  handleNextButtonClick = (event) => {
    const {
      onChangePage,
      page,
    } = this.props;
    onChangePage(event, page + 1);
  };

  handleLastPageButtonClick = event => () => {
    const {
      onChangePage,
      count,
      rowsPerPage,
    } = this.props;
    onChangePage(
      event,
      Math.max(0, Math.ceil(count / rowsPerPage) - 1),
    );
  };

  render() {
    const {
      classes, count, page, rowsPerPage, theme,
    } = this.props;
    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick()}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(TablePaginationActions);