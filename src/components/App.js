import React from 'react';
import './app.scss';

import {AppBar,Toolbar,Typography, Grid} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// Components
import Nav from './Nav/Nav';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="app-component">
        <div>

          <Grid container spacing={24} style={{ maxWidth: 1500 }}>
            <Grid item md={12} lg={6}>
              {/* <BlockchainStats /> */}
              {/* <ExchangeRates /> */}
              Main app here..
            </Grid>
            <Grid item md={12} lg={6}>
              
            </Grid>
          </Grid>

        </div>
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