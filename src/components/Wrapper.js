import React from 'react';

class Wrapper extends React.PureComponent {
  render() {
    return (
      <div className="wrapper">{this.props.children}</div>
    );
  }
}

export default Wrapper;