import React from 'react';
import './addresslist.scss';

// Material UI
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Typography,Card,CardHeader,CardContent, Grid, Button,Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class AddressList extends React.Component {

  constructor(props) {
    super(props);
    this.getAddresses = this.getAddresses.bind(this);
    this.addNewAddress = this.addNewAddress.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.state = {open: false, input: ''}
}

componentWillMount() {
    this.getAddresses();
}
componentWillReceiveProps(nextProps) {
  console.log(nextProps)
}

getAddresses() {
    this.props.getBitcoinAddresses();
}

addNewAddress() {
  console.log(this.state.input)
  this.props.addBitcoinAddress(this.state.input);
  this.props.getBitcoinAddresses();
  this.handleClose();
  this.setState({input: ''})
}

handleOpen() {
  this.setState({open: true});
}

handleClose() {
  this.setState({open: false});
}

updateInput(event) {
  this.setState({input: event.target.value});
}

  render() {
    const {bitcoinAddressData} = this.props;
    return (
      <div className="addresslist-component">
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Bitcoin Address</DialogTitle>
          <DialogContent className="dialog-content">
            <DialogContentText>
              Enter your bitcoin address below. Please enter only Testnet Addresses.
            </DialogContentText>
            <input 
              autoFocus 
              placeholder="Enter Bitcoin Address..." 
              value={this.state.input}
              onChange={this.updateInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.addNewAddress} color="default">
              Add
            </Button>
          </DialogActions>
        </Dialog>
       <Card elevation={0} style={{boxShadow: '0 0 50px rgba(0,0,0, .1)'}}>
        <CardHeader
            className="card-header"
            title="Address List"
            subheader="Your Bitcoin Addresses"
            action={
              <div className="add-address-button">
              <Button
  
              onClick={this.handleOpen}
            >
              Add New
            </Button>
          </div>
            }
          />
          <CardContent  className="card-content">
          
        
          {bitcoinAddressData.addresses && bitcoinAddressData.addresses.map((address, index, array)=>{
            return (
              <ExpansionPanel  key={index} elevation={0} style={{boxShadow: '0 0 50px rgba(0,0,0, .1)', border: 'none', zIndex: 1, position: 'relative'}}>
            <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
              <Typography className="truncate">{address.address}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="expansion-panel-details">
            <Grid container className="main-container" spacing={24}>
            <Grid item xs={12} md={6}>
              <span><strong>Change Index:</strong> {address.change_index}</span>
              <span><strong>Final Balance:</strong> {address.final_balance}</span>
              <span><strong>Number of Transactions:</strong> {address.n_tx}</span>
            </Grid>
            <Grid item xs={12} md={6}>
              <span><strong>Total Received:</strong> {address.total_received}</span>
              <span><strong>Total Sent:</strong> {address.total_sent}</span>
            </Grid>
          </Grid>
              
              
            </ExpansionPanelDetails>
          </ExpansionPanel>
            )
          })
        } 

        </CardContent>
      </Card>
         
      </div>
    );
  }
}

AddressList.displayName = 'AddressList';
AddressList.propTypes = {};
AddressList.defaultProps = {};

export default AddressList;
