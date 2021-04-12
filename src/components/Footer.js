import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  render() {
    return (
      <footer className="quote">
        <hr className="underline" />
        <p>{this.props.quote.text}</p>
        <p>— {this.props.quote.by}</p>
      </footer>
    );
  }
}

Footer.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
  }),
};

export default Footer;
