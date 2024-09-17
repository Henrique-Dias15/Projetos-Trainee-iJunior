import "./Display.css";
import Button from "./Button";
import Input from "./Input";
import Resultados from "./Resultados";

const Display = () => {
  return (
    <div className="Display">
      <h1>
        SPLI
        <br />
        TTER
      </h1>

      <div className="Main">
        <div className="Inputs">
          <Input id1="billText" id2="bill" name="Bill" />
          <div className="inputTip">
            <p>Select Tip %</p>
            <div className="buttons">
              <Button id="tip5" value={5 + "%"} />
              <Button id="tip10" value={10 + "%"} />
              <Button id="tip15" value={15 + "%"} />
              <Button id="tip25" value={25 + "%"} />
              <Button id="tip50" value={50 + "%"} />
              <input type="number" id="tipCustom" placeholder={"Custom"} />
            </div>
          </div>
          <Input id1="peopleText" id2="people" name="Number of People" />
        </div>

        <div className="Resultados">
          <Resultados name="Tip Amount" />
          <Resultados name="Total" />
          <div className="reset">
            <button id="resetButoon">RESET</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
