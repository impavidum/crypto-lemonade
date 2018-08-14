import React from 'react';
import './transactionlist.scss';

// Material UI
import {ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails,Typography,Card,CardHeader,CardContent,Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {FormattedTime, FormattedDate} from 'react-intl';

class TransactionList extends React.Component {

  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
}

refresh() {
  this.props.getBitcoinAddresses();
}
  render() {
    const {bitcoinAddressData} = this.props;
    return (
      <div className="transactionList-component">
       <Card elevation={0} style={{boxShadow: '0 0 50px rgba(0,0,0, .1)'}}>
        <CardHeader
            className="card-header"
            title="Transaction List"
            subheader="Your Recent Transactions"
            action={
              <div className="add-address-button">
              <Button
              className="refresh-button"
              onClick={this.refresh}
            >
              Refresh
            </Button>
          </div>
            }
          />
          <CardContent  className="card-content">
          
        
          {bitcoinAddressData.txs && bitcoinAddressData.txs.map((transaction, index, array)=>{
            return (
              <ExpansionPanel key={index} elevation={0} style={{boxShadow: '0 0 50px rgba(0,0,0, .1)', border: 'none'}}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className="truncate">
              
              <FormattedDate
                value={new Date(transaction.time)}
                month='long'
                day='2-digit'
              />
              <span> @ </span>
              <FormattedTime value={new Date(transaction.time)}/>
</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="expansion-panel-details">
         
              <span><strong>Bitcoin Address:</strong> {transaction.out[0].addr}</span>
              <span><strong>Balance:</strong> {transaction.balance}</span>
              <span><strong>Size:</strong> {transaction.size}</span>
              <span><strong>Fee: </strong>{transaction.fee}</span>
      
              
              
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

TransactionList.displayName = 'TransactionList';
TransactionList.propTypes = {};
TransactionList.defaultProps = {};

export default TransactionList;
