import Wrapper from './components/Wrapper';
import Calculator from './components/Calculator';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
  ['A/C', '+/-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
