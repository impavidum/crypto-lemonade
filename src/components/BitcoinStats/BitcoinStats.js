import React from 'react';
import './bitcoinstats.scss';
import PropTypes from 'prop-types';

// Third Party imports
import {Card, CardContent, CardHeader,IconButton, Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {ResponsiveContainer, LineChart, Brush, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

class BitcoinStats extends React.Component {
  constructor(props) {
    super(props);
    this.getBitcoinStats = this.getBitcoinStats.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      duration: 365,
      anchorEl: null,
    }
}

  componentWillMount() {
      this.getBitcoinStats(this.state.duration);
  }

  // Data Retrieval
  getBitcoinStats(days) {
    this.props.getBitcoinStats(days);
}

  // Menu 
  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
    console.log(event.target.value);
  };

  handleClose() {
    this.setState({ anchorEl: null });
  };

  setDuration(duration) {
    this.setState({duration});
    this.getBitcoinStats(duration);
    this.handleClose();
  }

  render() {
    const {bitcoinStats} = this.props;
    const { anchorEl } = this.state;

    return (
      <div className="bitcoinstats-component">
        <Card elevation={0} style={{boxShadow: '0 0 50px rgba(0,0,0, .1)'}}>
        <CardHeader
        className="card-header"
            title="Bitcoin USD Value"
            subheader={`Past ${this.state.duration} days`}
            action={
              <IconButton
              className="icon-button"
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
            }
          />
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={()=>{this.setDuration(30)}}>Past 30 Days</MenuItem>
          <MenuItem onClick={()=>{this.setDuration(90)}}>Past 90 Days</MenuItem>
          <MenuItem onClick={()=>{this.setDuration(365)}}>Past Year</MenuItem>

        </Menu>
          {/* <Divider/> */}
          <CardContent className="card-content" style={{height: 500}}>
          {bitcoinStats.values && <ResponsiveContainer>
            <LineChart data={bitcoinStats.values}  >
            <XAxis dataKey="name" hide/>
            <YAxis hide/>
            <CartesianGrid stroke='#f5f5f5'/>
            <Tooltip />
            {/* <Legend /> */}
            <Line  dataKey="USD" stroke="#F7CA18" dot={false}/>
          </LineChart>
          </ResponsiveContainer>}
        </CardContent>
      </Card>
      </div>
    );
  }
}

BitcoinStats.displayName = 'BitcoinStats';
BitcoinStats.propTypes = {};
BitcoinStats.defaultProps = {};

export default BitcoinStats;
