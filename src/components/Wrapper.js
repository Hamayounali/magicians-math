import React from 'react';
import PropTypes from 'prop-types';

class Wrapper extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="wrapper">{children}</div>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Wrapper;
