import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState(0);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const checked1 = (e) => {
    setCheck1(e);
    checkStrength();
  };

  const checked2 = (e) => {
    setCheck2(e);
    checkStrength();
  };

  const checked3 = (e) => {
    setCheck3(e);
    checkStrength();
  };

  const checked4 = (e) => {
    setCheck4(e);
    checkStrength();
  };

  const value = (e) => {
    setData(e);
    checkStrength();
    var color =
      "linear-gradient(90deg, rgb(164, 255, 171)" +
      (e / 17) * 100 +
      "%, rgb(19,18,26)" +
      (e / 17) * 100 +
      "%)";
    slider.style.background = color;
  };

  const checkStrength = () => {
    let length = parseInt(data);

    if (length == 0 || (!check1 && !check2 && !check3 && !check4)) {
      setTooWeak();
      return;
    }
    let strengthLvl = 0;
    if (check1) {
      strengthLvl += 2;
    }
    if (check2) {
      strengthLvl += 2;
    }
    if (check3) {
      strengthLvl += 1;
    }
    if (check4) {
      strengthLvl += 1;
    }

    if (length < 6) {
      setTooWeak();
    } else {
      let strength = strengthLvl * length;
      console.log(strength);
      if (strength < 10) {
        setTooWeak();
      } else if (strength < 30) {
        setWeak();
      } else if (strength < 50) {
        setMedium();
      } else {
        setStrong();
      }
    }
  };

  const setTooWeak = () => {
    document.getElementById("levelTxt").innerHTML = "TOO WEAK";
    document.getElementById("bar1").className = "bars bar1 tooWeak";
    document.getElementById("bar2").className = "bars bar2";
    document.getElementById("bar3").className = "bars bar3";
    document.getElementById("bar4").className = "bars bar4";
  };

  const setWeak = () => {
    document.getElementById("levelTxt").innerHTML = "WEAK";
    document.getElementById("bar1").className = "bars bar1 weak";
    document.getElementById("bar2").className = "bars bar2 weak";
    document.getElementById("bar3").className = "bars bar3";
    document.getElementById("bar4").className = "bars bar4";
  };

  const setMedium = () => {
    document.getElementById("levelTxt").innerHTML = "MEDIUM";
    document.getElementById("bar1").className = "bars bar1 medium";
    document.getElementById("bar2").className = "bars bar2 medium";
    document.getElementById("bar3").className = "bars bar3 medium";
    document.getElementById("bar4").className = "bars bar4";
  };

  const setStrong = () => {
    document.getElementById("levelTxt").innerHTML = "STRONG";
    document.getElementById("bar1").className = "bars bar1 strong";
    document.getElementById("bar2").className = "bars bar2 strong";
    document.getElementById("bar3").className = "bars bar3 strong";
    document.getElementById("bar4").className = "bars bar4 strong";
  };

  const randomPassword = () => {
    var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCases = "abcdefgihjklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var symbols = "!@#$%&*";
    var characters =
      (check1 ? upperCases : "") +
      (check2 ? lowerCases : "") +
      (check3 ? numbers : "") +
      (check4 ? symbols : "");

    var lenString = data;
    var randomstring = "";

    for (var i = 0; i < lenString; i++) {
      var rnum = Math.floor(Math.random() * characters.length);
      randomstring += characters.substring(rnum, rnum + 1);
    }

    document.getElementById("result").innerHTML =
      randomstring.length != 0 ? randomstring : "Nada selecionado";
  };

  return (
    <div class="App">
      <h1>Password Generator</h1>

      <div class="Resultado">
        <p id="result">P4$5W0rD!</p>
        <button id="copyButton"></button>
      </div>

      <div class="Configs">
        <div id="length">
          <div id="valores">
            <label htmlFor="scrollBar">Character Length</label>
            <span id="rangeResult">{data}</span>
          </div>
          <input
            type="range"
            min="0"
            max="17"
            value={data}
            name="slider"
            id="slider"
            onChange={(e) => value(e.target.value)}
          />
        </div>

        <div id="checkBoxes">
          <div>
            <input
              type="checkbox"
              id="includeUppercase"
              onChange={(e) => checked1(e.target.checked)}
            />
            <label htmlFor="includeUppercase">Include Uppercase Letters</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="includeLowercase"
              onChange={(e) => checked2(e.target.checked)}
            />
            <label htmlFor="includeLowercase">Include Lowercase Letters</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="includeNumbers"
              onChange={(e) => checked3(e.target.checked)}
            />
            <label htmlFor="includeNumbers">Include Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="includeSymbols"
              onChange={(e) => checked4(e.target.checked)}
            />
            <label htmlFor="includeSymbols">Include Symbols</label>
          </div>
        </div>
        <div id="strength">
          <h2 htmlFor="STRENGTH">STRENGTH</h2>
          <div class="strengthlvl">
            <p class="fs-2" id="levelTxt">
              WEAK
            </p>
            <div id="bar1" class="bars bar1"></div>
            <div id="bar2" class="bars bar2"></div>
            <div id="bar3" class="bars bar3"></div>
            <div id="bar4" class="bars bar4"></div>
          </div>
        </div>
        <div class="generateBtn">
          <button
            id="generateBtn"
            class="button"
            onClick={() => randomPassword()}
          >
            GENERATE
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#24232C"
                d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
