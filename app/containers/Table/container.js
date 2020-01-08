import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import TablePaging from './TablePaging';
import {
  selectTableRowDetails,
  setPage,
  setRowsPerPage,
  unselectTableRowDetails,
} from './actions';

const mapStateToProps = state => ({
  selectedRowDetails: state.get('table').toJS().selectedRowDetails,
  page: state.get('table').toJS().page,
  rowsPerPage: state.get('table').toJS().rowsPerPage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  push,
  selectTableRowDetails,
  unselectTableRowDetails,
  setPage,
  setRowsPerPage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TablePaging);
