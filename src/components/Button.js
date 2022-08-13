import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CalcContext } from '../context/CalcContext';

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

function Button({ value }) {
  const { calc, setCalc } = useContext(CalcContext);
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };

  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0 });
  };

  // User click number
  const handleClickButton = () => {
    const numberString = value.toString();
    let numberValue;
    if (numberString === '0' && calc.num === 0) {
      numberValue = '0';
    } else {
      numberValue = Number(calc.num + numberString);
    }
    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  // User Click operation
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // User click equals
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          '+': () => a + b,
          '-': () => a - b,
          x: () => a * b,
          '/': () => a / b,
        };
        return result[sign](a, b);
      };

      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        num: 0,
      });
    }
  };

  // User click persent
  const persentClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: '',
    });
  };

  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: '',
    });
  };

  const handleBtnClick = () => {
    const results = {
      '.': commaClick,
      'A/C': resetClick,
      '/': signClick,
      x: signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
      '%': persentClick,
      '+/-': invertClick,
    };
    if (results[value]) {
      return results[value]();
    }
    return handleClickButton();
  };
  return (
    <button onClick={handleBtnClick} type="submit" className={`${getStyleName(value)} button`}>{value}</button>
  );
}

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Button;
