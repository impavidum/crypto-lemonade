import React from 'react';
import './footer.scss';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer-component">
        <h1>A demo for Shapeshift by <a href="https://impavidum.me/" target="_blank">David Ramsey</a></h1>
      </div>
    );
  }
}

Footer.displayName = 'Footer';
Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
