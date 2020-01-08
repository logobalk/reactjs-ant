/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableViews from 'react-swipeable-views';
import uuid from 'uuid';
import samplingMethodData from './samplingMethodData';
import styles from './samplingMethod.style';

class SamplingMethod extends React.Component {
  static propTypes = {
    theme: PropTypes.shape().isRequired,
    classes: PropTypes.shape().isRequired,
  };

  static defaultProp = {};

  state = {
    swipeValue: 0,
  };

  handleSwipeChange = (event, swipeValue) => {
    this.setState({ swipeValue });
  };

  handleChangeIndex = index => {
    this.setState({ swipeValue: index });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <Card >
          <CardContent>
            <AppBar position="static" color="default">
              <Tabs
                value={this.state.swipeValue}
                onChange={this.handleSwipeChange}
                indicatorColor="secondary"
                textColor="secondary"
                variant="fullWidth"
              >
                <Tab label="Weight Scale" />
                <Tab label="Volumn Metric Measuring" />
                <Tab label="Full Drum" />
              </Tabs>
            </AppBar>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={this.state.swipeValue}
              onChangeIndex={this.handleChangeIndex}
            >
              {
                samplingMethodData && samplingMethodData.root.map(root =>
                  <div >
                    <Card >
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {root.text}
                        </Typography>

                        <ListItem >
                          <Grid container spacing={8} alignItems="center">
                            {samplingMethodData && samplingMethodData[root.rootData].map(data =>
                              <React.Fragment>
                                {data.type === 'text' && (
                                  <React.Fragment>
                                    <Grid item xs={2} sm={2}>
                                      <ListItemText secondary={data.text} />
                                    </Grid>
                                    <Grid item xs={4} sm={4}>
                                      <TextField
                                        id="standard-bare"
                                        className={classes.textField}
                                        defaultValue=""
                                        margin="normal"
                                      />
                                    </Grid>
                                  </React.Fragment>
                                )}
                                {data.type === 'date' && (
                                  <React.Fragment>
                                    <Grid item xs={2} sm={2}>
                                      <ListItemText secondary={data.text} />
                                    </Grid>
                                    <Grid item xs={4} sm={4}>
                                      <TextField
                                        id="date"
                                        label=""
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                          shrink: true,
                                        }}
                                      />
                                    </Grid>
                                  </React.Fragment>
                                )}
                              </React.Fragment>
                            )}
                          </Grid>
                        </ListItem>
                      </CardContent>
                    </Card>
                  </div>
                )}
              <div >Item Three</div>

            </SwipeableViews>
          </CardContent>
        </Card>
      </div >
    );
  }
}

export default withStyles(styles, { withTheme: true })(SamplingMethod);
