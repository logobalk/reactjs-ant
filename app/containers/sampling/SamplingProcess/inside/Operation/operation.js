/**
 *
 * Operation stepper
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import uuid from 'uuid';
import operationData from './operationData';
import styles from './operation.style';

class Operation extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProp = {};

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        {operationData && operationData.root.map(data =>
          <React.Fragment >
            <List component="nav">
              <ListItem >
                <Typography variant="subheading" gutterBottom>
                  {data.text}
                </Typography>
              </ListItem>
            </List>

            <Grid container spacing={8} alignItems="flex-end" justify="flex-end">
              <Grid item xs={4} sm={4}>
                <FormControlLabel
                  control={
                    <Switch
                      // checked={this.state.checkedA}
                      // onChange={this.handleChange('checkedA')}
                      classes={{
                        switchBase: classes.colorSwitchBase,
                        checked: classes.colorChecked,
                        bar: classes.colorBar,
                      }}
                      color="secondary"
                      value={data.value}
                    />
                  }
                  label="Pass"
                />
              </Grid>
              <Grid item xs={8} sm={8}>
                <TextField
                  key={uuid.v4()}
                  id="standard-bare"
                  className={classes.textField}
                  placeholder="Please Input"
                  margin="normal"
                />
              </Grid>
            </Grid>
          </React.Fragment>
        )}


        {/* <Divider /> */}
      </Paper>
    );
  }
}

export default withStyles(styles)(Operation);
