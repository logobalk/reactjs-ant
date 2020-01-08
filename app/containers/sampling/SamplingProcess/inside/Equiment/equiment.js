/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import uuid from 'uuid';
import environmentData from './equimentData';
import styles from './equiment.style';

class Equiment extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProp = {};

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <List component="nav">
          <ListItem >
            <Grid container spacing={24}>
              {environmentData && environmentData.root.map(root =>
                <Grid xs={3} item key={root.id}>
                  <Typography variant="title" gutterBottom>
                    {root.text}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </ListItem>
          <Divider />
          {environmentData.data.map(data =>
            <ListItem key={uuid.v4()}>
              <Grid container spacing={24}>
                {Object.values(data.text).map(subData => (
                  <Grid item xs={3} key={uuid.v4()}>
                    <Typography key={subData} variant="body1" gutterBottom>
                      {subData}
                    </Typography>
                  </Grid>
                ))}
                <Grid item xs={3}>
                  {data.checkbox && (
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={this.state.checkedB}
                          // onChange={this.handleChange('checkedB')}
                          key={uuid.v4()}
                          value="checkedB"
                          classes={{
                            root: classes.rootCheckBox,
                            checked: classes.checked,
                          }}
                          color="default"
                        />
                      }
                      label="Pass"
                    />
                  )}
                </Grid>
              </Grid>
            </ListItem>
          )}
        </List>
        <Divider />
      </Paper>
    );
  }
}

export default withStyles(styles)(Equiment);
