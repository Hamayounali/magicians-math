import React from 'react';

const getStyleName = (btn) => {
  const className = {
    '=': 'opt',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
    '0': 'zero',
  };
  return className[btn];
};

class Button extends React.PureComponent {
  render() {
    const { value } = this.value;
    return (
      <button className={`${getStyleName(value)} button`}>{value}</button>
    );
  }
}

export default Button;
