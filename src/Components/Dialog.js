import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
   

  
  const handleClose = () => {
    props.close();
  };
  const handleDelete = () => {
    props.delete();
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}> */}
        {/* Open dialog
      </Button> */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         <b> Confirmation Message ! </b>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
           Are you sure you want to delete all the changes you've made ?
           </Typography>
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDelete} color="secondary">
            delete
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            cancle
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
