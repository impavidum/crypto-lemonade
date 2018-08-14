import React from 'react';
import './app.scss';

import {Grid} from '@material-ui/core';

// Components
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import AddressList from './AddressList/AddressList';
import TransactionList from './TransactionList/TransactionList';
import BitcoinStats from './BitcoinStats/BitcoinStats';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const {actions, bitcoin, colors} = this.props;
    return (
      <div className="app-component">
          <Nav/>
          <Grid container className="main-container" spacing={24}>

          <Grid item xs={12}>
          <BitcoinStats getBitcoinStats={actions.getBitcoinStats} bitcoinStats={bitcoin.bitcoinStats} colors={colors}/>

            </Grid>
            <Grid item xs={12} lg={6}>

              <TransactionList bitcoinAddressData={bitcoin.bitcoinAddressData} getBitcoinAddresses={actions.getBitcoinAddresses}/>

            </Grid>
            <Grid item xs={12} lg={6}>
            <AddressList addBitcoinAddress={actions.addBitcoinAddress} getBitcoinAddresses={actions.getBitcoinAddresses} bitcoinAddressData={bitcoin.bitcoinAddressData}/>

            </Grid>
          </Grid>
          <Footer/>
      </div>
    );
  }

}

AppComponent.defaultProps = {};

export default AppComponent;



{/* <Card  elevation={0} style={{ boxShadow: '0 0 50px rgba(0,0,0, .1)' }}>
                <CardHeader
                  action={
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Bitcoin Address List"
                  subheader="September 14, 2016"
                />
                {/* <Divider/> */}
                // <CardContent  >
                  {/* <AddressList /> */}
                // </CardContent>
              // </Card> */}