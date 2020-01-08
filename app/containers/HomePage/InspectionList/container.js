import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  setTableInspectionData,
  callTableInspectionData,
} from './actions';

import InspectionList from './inspectionList';

const mapStateToProps = state => ({
  // inspectionItems: state.get('main').toJS().inspectionItems,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setTableInspectionData,
  callTableInspectionData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InspectionList);
