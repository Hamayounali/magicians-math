import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Calculator from './components/Calculator';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from './context/CalcContext';
import About from './components/Pages/About';
import Quate from './components/Pages/Quate';

const btnValues = [
  ['A/C', '+/-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

function Home() {
  return (
    <About />
  );
}

function Calc() {
  return (
    <CalcProvider>
      <Wrapper>
        <Calculator />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
          /* eslint-disable */
          key={i}
        />
      ))}
    </ButtonBox>
  </Wrapper>
</CalcProvider>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Calc" element={<Calc />} />
      <Route path="Quate" element={<Quate />} />
    </Routes>
  );
}

export default App;
