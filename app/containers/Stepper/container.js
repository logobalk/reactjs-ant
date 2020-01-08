import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import QualityFormStepper from './stepper';
import {
  setStartStatus,
} from './actions';

const mapStateToProps = state => ({
  isStart: state.get('stepperEnviroiment').stepper.toJS().isStart,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setStartStatus,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QualityFormStepper);
