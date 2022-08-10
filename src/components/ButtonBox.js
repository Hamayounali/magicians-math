import React from 'react';

class ButtonBox extends React.PureComponent {
  render() {
    return (
      <div className="buttonBox">{this.props.children}</div>
    );
  }
}

export default ButtonBox;
