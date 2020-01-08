import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { compose } from 'redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import history from 'utils/history';
import Environment from './inside/Environment';
import LineClearance from './inside/LineClearance';
import styles from './stepper.style';
import PressureDiff from './inside/PressureDiff';
import WeightBoothEff from './inside/WeightBooth';
import N2Gas from './inside/N2Gas';
import WeightScaleEff from './inside/WeightScale';
import QualityReport from './report/qualityReport';
import StepperDetails from './StepperDetails';

function getSteps() {
  return [
    // '1. Line Clearance',
    // '2. Environment',
    '1. Pressure Diff.',
    '2. Weight Booth Efficiency',
    '3. N2 Gas',
    '4. Weight Scale Efficiency',
  ];
}

function getStepContent(step) {
  switch (step) {
    // case 0:
    //   return <LineClearance />;
    // case 1:
    //   return <Environment />;
    case 0:
      return <PressureDiff />;
    case 1:
      return <WeightBoothEff />;
    case 2:
      return <N2Gas />;
    case 3:
      return <WeightScaleEff />;
    default:
      return 'Unknown step';
  }
}

class QualityFormStepper extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    isStart: PropTypes.bool.isRequired,
    setStartStatus: PropTypes.func.isRequired,
  };

  state = {
    activeStep: 0,
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleNext = isFinish => () => {
    const { setStartStatus } = this.props;
    setStartStatus(false);
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    if (isFinish) {
      history.push('quality-form-report');
    }
  };

  handleBack = () => {
    const { setStartStatus } = this.props;
    setStartStatus(true);
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes, isStart } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      <div className={classes.root}>
        <StepperDetails />
        <Stepper alternativeLabel activeStep={activeStep} >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={this.handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        {isStart && (
          <div>
            {activeStep === steps.length ? (
              <Paper square elevation={0} className={classes.resetContainer}>
                <Typography>คุณทำรายการเสร็จแล้ว ต้องการทำใหม่หรือไม่?</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleReset} className={classes.button}>
                  Reset
                </Button>
              </Paper>
            ) :
              <div>
                {getStepContent(activeStep)}
                <div className={classes.actionsContainer}>
                  <div >
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.handleNext(activeStep === steps.length - 1)}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      hidden={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Previous
                    </Button>
                  </div>
                </div>
              </div>}
          </div>
        )}

      </div>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true }))(QualityFormStepper);
