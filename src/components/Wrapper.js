/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

class Wrapper extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h1 className="letsdo"> Lets do some math!</h1>
            <p>
              Mathemagician is a neologism, specifically a portmanteau, that combines mathematician and
              magician. A great number of self-working mentalism tricks rely on mathematical principles.
              Max Maven often utilizes this type of magic in his performance.
            </p>
            <p>
              Mathemagician is a neologism, specifically a portmanteau, that combines mathematician and
              magician. A great number of self-working mentalism tricks rely on mathematical principles.
              Max Maven often utilizes this type of magic in his performance.
            </p>
          </div>
          <div className="col-sm-6">
            <div className="wrapper">{children}</div>
          </div>
        </div>

      </div>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Wrapper;
