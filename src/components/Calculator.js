import React, { useContext } from 'react';
import { Textfit } from 'react-textfit';
import { CalcContext } from '../context/CalcContext';

function Calculator() {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit className="calculator" max={30} mode="single">{calc.num ? calc.num : calc.res}</Textfit>
  );
}

export default Calculator;
