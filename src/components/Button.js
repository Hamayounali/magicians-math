import React from 'react';
import PropTypes from 'prop-types';

const getStyleName = (btn) => {
  const className = {
    '=': 'opt',
    x: 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
    0: 'zero',
  };
  return className[btn];
};

class Button extends React.PureComponent {
  render() {
    const { value } = this.props;
    return (
      <button type="submit" className={`${getStyleName(value)} button`}>{value}</button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
