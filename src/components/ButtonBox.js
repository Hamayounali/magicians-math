import React from 'react'
class ButtonBox extends React.Component {
  render() {
    return (
      <div className='buttonBox'>{this.props.children}</div>
    );
  }
}

export default ButtonBox;
