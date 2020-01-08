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
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import uuid from 'uuid';
import styles from './n2Gas.style';


class WeightBoothEffPaper extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProp = {};

  render() {
    const { classes, filtersDef } = this.props;
    return (
      <Paper className={classes.root}>
        <List component="nav">
          <ListItem style={{ backgroundColor: '#AC1E2E' }}>
            {filtersDef && filtersDef[0].map(root =>
              <Grid container style={{ justifyContent: 'auto' }} key={uuid.v4()} spacing={12}>
                <Grid item key={root.key} >
                  <Typography style={{ color: 'white' }} variant="subheading" gutterBottom>
                    {root.key}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </ListItem>
          <Divider />
          {filtersDef && filtersDef.map(data =>
            <ListItem key={uuid.v4()}>
              {data && data.map(item =>
                <Grid container style={{ justifyContent: item.textAlign }} key={uuid.v4()} spacing={24}>
                  {(item.items).map(subItem => (
                    <Grid item key={uuid.v4()}>
                      <subItem.component {...subItem.props} key={subItem.key} >
                        {item.display}
                      </subItem.component>
                    </Grid>
                  ))}
                </Grid>
              )}
            </ListItem>
          )}
        </List>
        <Divider />
      </Paper>
    );
  }
}

export default withStyles(styles)(WeightBoothEffPaper);
