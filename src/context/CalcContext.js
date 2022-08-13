import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CalculaterContext = createContext();

function CalcProvider({ children }) {
  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0,
  });

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const providerValue = { calc, setCalc };

  return (
    <CalculaterContext.Provider value={providerValue}>
      {children}
    </CalculaterContext.Provider>
  );
}

CalcProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CalcProvider;
