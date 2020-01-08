import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TablePaginationActions from './TablePaginationActions';

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapDispatchToProps)(TablePaginationActions);
