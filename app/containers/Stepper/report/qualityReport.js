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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import uuid from 'uuid';
import Chip from '@material-ui/core/Chip';
import LocalOffer from '@material-ui/icons/LocalOffer';
import styles from './qualityReport.style';
import PressureDiffReport from './inside/PressureDiff';
import WeightBoothEffReport from './inside/WeightBoothEff';
import DialogIncident from './Dialog';

class QualityReport extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProp = {};

  state = {
    isDialogOpen: false,
  };

  handleOnSave = () => {
    this.setState({
      isDialogOpen: true,
    });
  }

  handleClose = () => {
    this.setState({ isDialogOpen: false });
  };

  render() {
    const { classes } = this.props;
    const { isDialogOpen } = this.state;
    return (
      <React.Fragment>
        <List key={uuid.v4()}>
          <ListItem>
            <Chip
              key={uuid.v4()}
              icon={<LocalOffer />}
              label="6.1 Pressure Diff"
              className={classes.chip}
              color="secondary"
              variant="outlined"
            />
          </ListItem>
          <Divider component="li" />
        </List>
        <PressureDiffReport />
        <List key={uuid.v4()}>
          <ListItem>
            <Chip
              key={uuid.v4()}
              icon={<LocalOffer />}
              label="6.2 Weight booth Efficialy"
              className={classes.chip}
              color="secondary"
              variant="outlined"
            />
          </ListItem>
          <Divider component="li" />
        </List>
        <WeightBoothEffReport />
        <br />
        <React.Fragment >
          <Grid container spacing={8} alignItems="flex-end" justify="flex-end">
            <Grid item xs={4} sm={3}>
              <Button variant="contained" color="secondary" style={{ backgroundColor: '#9E9E9E', width: '100%' }} >
                CANCEL
              </Button>
            </Grid>
            <Grid item xs={4} sm={3} >
              <Button variant="contained" onClick={this.handleOnSave} color="secondary" style={{ backgroundColor: '#AC1F2D', width: '100%' }} >
                SAVE
              </Button>
            </Grid>
          </Grid>
          <DialogIncident isDialogOpen={isDialogOpen}  handleClose ={()=>this.handleClose}/>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(QualityReport);
