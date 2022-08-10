import React from 'react'
const getStyleName = btn => {
    const className = {
      '=': 'opt',
      'x': 'opt',
      '-': 'opt',
      '+': 'opt',
      '/': 'opt',
      '0': 'zero',
    }
    return className[btn];
}

class Button extends React.Component {
    render() {
      return (
        <button className={`${getStyleName(this.props.value)} button`}>{this.props.value}</button>
      );
    }
  }

export default Button;
