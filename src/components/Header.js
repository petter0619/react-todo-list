import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="page-title">{this.props.title}</h1>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
