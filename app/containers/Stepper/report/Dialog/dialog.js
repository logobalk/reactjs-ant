/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import uuid from 'uuid';
import styles from './dialog.style';

class DialogIncident extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
    isDialogOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  static defaultProp = {};

  state = {};

  handleIncident = () =>{
    history.push('/incident-form');
  }

  render() {
    const { classes, isDialogOpen, handleClose } = this.props;
    return (
      <React.Fragment >
        <Dialog
          open={isDialogOpen}
          onClose={handleClose()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">INCIDENT REQUEST</DialogTitle>
          <DialogContent>
            <DialogContentText>
              ระบบจะทำการส่ง incident ไปที่ email QA เนื่องจาก
              Pressure diff มี สเตตัส Failed
              Weight booth Efficiency มี สเตตัส Failed
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleIncident} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(DialogIncident);
