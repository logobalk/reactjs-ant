import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import StepperDetails from './stepperDetails';
import {
  setFiledsDetail,
} from './actions';
import {
  setStartStatus,
} from '../actions';

const mapStateToProps = state => ({
  fields: state.get('stepperEnviroiment').stepperDeatails.toJS().fields,
  isStart: state.get('stepperEnviroiment').stepper.toJS().isStart,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setFiledsDetail,
  setStartStatus,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StepperDetails);
