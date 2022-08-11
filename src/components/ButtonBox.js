import React from 'react';
import PropTypes from 'prop-types';

class ButtonBox extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="buttonBox">{children}</div>
    );
  }
}

ButtonBox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonBox;
