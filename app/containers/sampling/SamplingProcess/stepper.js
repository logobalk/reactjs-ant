import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme, createMuiTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import history from 'utils/history';
import Environment from './inside/Environment';
import Equiment from './inside/Equiment';
import styles from './stepper.style';
import Operation from './inside/Operation';
import SamplingMethod from './inside/SamplingMethod';

function getSteps() {
  return [
    '1. Environment',
    '2. Equiment',
    '3. Operation',
    '4. Sampling Method',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Environment />;
    case 1:
      return <Equiment />;
    case 2:
      return <Operation />;
    case 3:
      return <SamplingMethod />;
    default:
      return 'Unknown step';
  }
}

class SamplingProcess extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
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
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    if (isFinish) {
      history.push('quality-form-report');
    }
  };

  handleBack = () => {
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
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    const muiTheme = createMuiTheme({
      stepper: {
        iconColor: 'green', // or logic to change color
      },
    });

    return (
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={activeStep} >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepButton onClick={this.handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
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
    );
  }
}

export default withStyles(styles, { withTheme: true })(SamplingProcess);
