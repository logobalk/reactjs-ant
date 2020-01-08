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
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import uuid from 'uuid';
import lineClearanceData from './lineClearanceData';
import lineClearanceJson from './lineClearance.json';
import styles from './lineClearance.style';


class LineClearancePaper extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProp = {};

  handleFilterDataUpdate(field, key) {
    return (args, value) => {
    };
  }

  render() {
    const lineClearance = lineClearanceData;
    console.log('lineClearanceJson===>', lineClearanceJson.materialGroup.nonBetaLactam.grade.D.roomNo['104']);

    const { classes ,filtersDef ,filtersDiff ,pressureDiff} = this.props;
    // const filtersDef = lineClearanceData.create(
    //   lineClearanceJson.materialGroup["nonBetaLactam"].grade["D"]["roomNo"]["104"],
    //   this.handleFilterDataUpdate.bind(this),
    //   classes,
    // );
    return (
      <Paper className={classes.root}>
        <List component="nav">
          <ListItem style={{ backgroundColor: '#AC1E2E' }}>
            {filtersDef && filtersDef.map(root =>
              <Grid container  style={{ justifyContent: 'auto' }} key={uuid.v4()} spacing={24}>
                <Grid item key={root.key}>
                  <Typography style={{ color: 'white' }} variant="subheading" gutterBottom>
                    {root.key}
                  </Typography>
                </Grid>
              </Grid>
            )}
          </ListItem>
          <Divider />

          <ListItem key={uuid.v4()}>
            {filtersDef.map(data =>
              <Grid container style={{ justifyContent: data.textAlign }} key={uuid.v4()} spacing={24}>
                {(data.items).map(item => (
                  <Grid item key={uuid.v4()}>
                    <item.component {...item.props} key={item.key} >
                      {data.display}
                    </item.component>
                  </Grid>
                ))}
              </Grid>
            )}
          </ListItem>

          <ListItem key={uuid.v4()}>
            {filtersDiff.map(diffItem=>
              <Grid container style={{ justifyContent: diffItem.textAlign }} key={uuid.v4()} spacing={24}>
                {(diffItem.items).map(item => (
                  <Grid item key={uuid.v4()}>
                    <item.component {...item.props} key={item.key} >
                      {diffItem.display}
                    </item.component>
                  </Grid>
                ))}
              </Grid>
            )}
          </ListItem>

          <ListItem key={uuid.v4()}>
            {pressureDiff&& pressureDiff.map(pressureDiffItem=>
              <Grid container style={{ justifyContent: pressureDiffItem.textAlign }} key={uuid.v4()} spacing={24}>
                {(pressureDiffItem.items).map(item => (
                  <Grid item key={uuid.v4()}>
                    <item.component {...item.props} key={item.key} >
                      {pressureDiffItem.display}
                    </item.component>
                  </Grid>
                ))}
              </Grid>
            )}
          </ListItem>

        </List>
        <Divider />
      </Paper>
    );
  }
}

export default withStyles(styles)(LineClearancePaper);
