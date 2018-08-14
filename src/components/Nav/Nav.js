import React from 'react';
import './nav.scss';

import {AppBar,Toolbar,Typography} from '@material-ui/core';

class Nav extends React.Component {

  render() {
    return (
      <div className="nav-component">
       <AppBar position="static" color="default">
        <Toolbar style={{padding: 0}}>
          <div className="nav-container" >
          <img src="https://d1wp6m56sqw74a.cloudfront.net/~assets/ae2c4dd5712bac87a81827c6325e31ee" alt="" style={{height: 30, marginRight: 15}}/>
          <Typography variant="title" color="inherit">
            Sam's Lemonade
          </Typography>
          </div>
        
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

Nav.displayName = 'Nav';
Nav.propTypes = {};
Nav.defaultProps = {};

export default Nav;

