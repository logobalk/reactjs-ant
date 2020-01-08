import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MobileStepper from '@material-ui/core/MobileStepper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import styles from './conformMaterial.styles';

import conformMaterialData from './conformMaterailData';


// function Navigator(props) {
class ConformMaterial extends React.Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    theme: PropTypes.shape().isRequired,
  };

  state = {
    value: 'false',
    swipeValue: 0,
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleSwipeChange = (event, swipeValue) => {
    console.log('swipeValue===>', swipeValue);
    this.setState({ swipeValue });
  };

  handleChangeIndex = index => {
    this.setState({ swipeValue: index });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep, swipeValue } = this.state;
    const maxSteps = conformMaterialData.summaryImage.length;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid key={1} item xs={12} sm={4}>
              <Paper className={classes.rootPaper} elevation={1}>
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <BookmarkBorder />
                    }
                    title="Sampling Material"
                  />
                </Card>
                {/* <Typography divider variant="h5" component="h3">
                  Sampling Material
                </Typography> */}
                <br />
                <Divider />
                <List component="nav" className={classes.root}>
                  <Divider />
                  {conformMaterialData && conformMaterialData.samplingMaterial.map(item => (
                    <React.Fragment>
                      <ListItem button divider>
                        <Grid container spacing={8} alignItems="center">
                          <Grid item xs={5} sm={5}>
                            <ListItemText secondary={item.display} />
                          </Grid>
                          <Grid item xs={2} sm={2}>
                            <ListItemText primary=":" />
                          </Grid>
                          <Grid item xs={5} sm={5}>
                            <ListItemText secondary={item.value} />
                          </Grid>
                        </Grid>
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
                <br />
                <center>
                  <Button variant="contained" color="secondary" className={classes.button}>
                    INCIDENT
                  </Button>
                </center>
              </Paper>

              <Paper className={classes.rootPaper} elevation={1}>
                <Typography divider variant="h5" component="h3">
                  Sampling Plan
                </Typography>
                <br />
                <Divider />
                <List component="nav" className={classes.root}>
                  <Divider />
                  {conformMaterialData && conformMaterialData.samplingPlan.map(item => (
                    <React.Fragment>
                      <ListItem button divider>
                        <Grid container spacing={8} alignItems="center">
                          <Grid item xs={5} sm={5}>
                            <ListItemText secondary={item.display} />
                          </Grid>
                          <Grid item xs={2} sm={2}>
                            <ListItemText primary=":" />
                          </Grid>
                          <Grid item xs={5} sm={5}>
                            <ListItemText secondary={item.value} />
                          </Grid>
                        </Grid>
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                  {conformMaterialData && conformMaterialData.samplingPlanFields.map(item => (
                    <React.Fragment>
                      <ListItem button divider >
                        <Grid container spacing={8} alignItems="center">
                          <Grid item xs={5} sm={5}>
                            <ListItemText secondary={item.display} />
                          </Grid>
                          <Grid item xs={2} sm={2}>
                            <ListItemText primary=":" />
                          </Grid>
                          <Grid item xs={3} sm={3}>
                            <TextField
                              style={{ height: '2.2em' }}
                              variant="outlined"
                              id="custom-css-outlined-input"
                            />
                          </Grid>
                          <Grid item xs={2} sm={2}>
                            <ListItemText secondary="DRUM" />
                          </Grid>
                        </Grid>
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
                <br />
                <React.Fragment >
                  <Grid container spacing={8} alignItems="flex-end" justify="flex-end">
                    <Grid item xs={4} sm={4}>
                      <Button variant="contained" color="secondary" style={{ backgroundColor: '#9E9E9E', width: '100%' }} >
                        CANCEL
                      </Button>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <Button variant="contained" color="secondary" style={{ backgroundColor: '#AC1F2D', width: '100%' }} >
                        SAVE
                      </Button>
                    </Grid>
                  </Grid>
                </React.Fragment>

              </Paper>
            </Grid>
            {/* tab summary */}
            <Grid key={2} item sm={8}>
              <Paper className={classes.rootPaper} elevation={1}>
                <AppBar position="static" color="default">
                  <Tabs
                    value={this.state.swipeValue}
                    onChange={this.handleSwipeChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="fullWidth"
                  >
                    <Tab label=" Summary Report" />
                    <Tab label="COA (image)" />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                  index={this.state.swipeValue}
                  onChangeIndex={this.handleChangeIndex}
                >
                  {/* report */}
                  <div style={{ overflow: '-webkit-paged-y' }}>
                    {conformMaterialData && swipeValue === 0 && conformMaterialData.summaryReportData.map(data => (
                      <React.Fragment>
                        <FormControl component="fieldset" className={classes.formControl}>
                          <Grid container spacing={8} alignItems="center">
                            <Grid item sm={6}>
                              <FormLabel className={classes.fontSize} style={{ marginTop: '1em' }} component="legend">{data.display}</FormLabel>
                              {data && data.helperText !== '' && (
                                <FormHelperText >{data.helperText}</FormHelperText>
                              )}
                            </Grid>
                            <Grid item sm={6}>
                              <RadioGroup
                                key={data.id}
                                aria-label={data.display}
                                name={data.display}
                                className={classes.group}
                                value={this.state.value}
                                onChange={this.handleChange}
                                row
                              >
                                <FormControlLabel
                                  value="true" control={<Radio
                                    className={classes.fontSize}
                                    classes={{
                                      root: classes.radio,
                                      checked: classes.checked,
                                    }} />} label="Conform" />
                                <FormControlLabel
                                  value="false" control={<Radio
                                    className={classes.fontSize}
                                  />} label="Non Conform" />
                              </RadioGroup>
                            </Grid>
                          </Grid>
                        </FormControl>
                        <Divider />
                      </React.Fragment>
                    ))}
                  </div>
                  {/* Image */}
                  <div className={classes.rootImage}>
                    <Paper square elevation={0} className={classes.header}>
                      <Typography>{conformMaterialData.summaryImage[activeStep].label}</Typography>
                    </Paper>
                    <img
                      className={classes.img}
                      src={conformMaterialData.summaryImage[activeStep].imgPath}
                      alt={conformMaterialData.summaryImage[activeStep].label}
                    />
                    <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      className={classes.mobileStepper}
                      nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                          Next
                          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                      }
                      backButton={
                        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                          Back
                        </Button>
                      }
                    />
                  </div>
                </SwipeableViews>
                <br />
                <React.Fragment >
                  <Grid container spacing={8} alignItems="flex-end" justify="flex-end">
                    <Grid item xs={4} sm={4}>
                      <Button variant="contained" color="secondary" style={{ backgroundColor: '#9E9E9E', width: '100%' }} >
                        CLEAR & CLOSE
                      </Button>
                    </Grid>
                    <Grid item xs={4} sm={4} >
                      <Button variant="contained" color="secondary" style={{ backgroundColor: '#AC1F2D', width: '100%' }} >
                        SAVE
                      </Button>
                    </Grid>
                  </Grid>
                </React.Fragment>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }

}
export default withStyles(styles, { withTheme: true })(ConformMaterial);
