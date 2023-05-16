import Wrapper from "./cal_component/Wrapper";
import Screen from "./cal_component/Screen";
import ButtonBox from './cal_component/ButtonBox';
import Button from './cal_component/Button';
import CalcProvider from "./context/CalcContext";
import './cal.css';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function Clsy() {
  return (
    <CalcProvider>
    <p className="heading">Calculator</p>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default Clsy;
