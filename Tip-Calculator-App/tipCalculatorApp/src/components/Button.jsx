import "./Button.css";
import { useEffect, useState } from "react";

const Button = ({ value, id }) => {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);

  const checkButtons = (e) => {
    switch (e.id) {
      case "tip5":
        setButton1((button1) => !button1);
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        break;
      case "tip10":
        setButton2((button2) => !button2);
        setButton1(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        break;
      case "tip15":
        setButton3((button3) => !button3);
        setButton2(false);
        setButton1(false);
        setButton4(false);
        setButton5(false);
        break;
      case "tip25":
        setButton4((button4) => !button4);
        setButton2(false);
        setButton3(false);
        setButton1(false);
        setButton5(false);
        break;
      case "tip50":
        setButton5((button5) => !button5);
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton1(false);
        break;
      default:
        alert("Deu errado");
        setButton1(false);
        setButton2(false);
        setButton3(false);
        setButton4(false);
        setButton5(false);
        break;
    }
  };
  useEffect(() => {
    var styleSelect =
      "background-color: hsl(173, 61%, 77%); color: hsl(183, 100%, 15%);";
    var styleNormal =
      " background-color: hsl(183, 100%, 15%); color: hsl(0, 0%, 100%);";
    if (button1) {
      tip5.style = styleSelect;
      tipCustom.value = "";
    } else {
      tip5.style = styleNormal;
    }
    if (button2) {
      tip10.style = styleSelect;
      tipCustom.value = "";
    } else {
      tip10.style = styleNormal;
    }
    if (button3) {
      tip15.style = styleSelect;
      tipCustom.value = "";
    } else {
      tip15.style = styleNormal;
    }
    if (button4) {
      tip25.style = styleSelect;
      tipCustom.value = "";
    } else {
      tip25.style = styleNormal;
    }
    if (button5) {
      tip50.style = styleSelect;
      tipCustom.value = "";
    } else {
      tip50.style = styleNormal;
    }
  });

  return (
    <input
      type="button"
      id={id}
      value={value}
      onClick={(e) => checkButtons({ id })}
    />
  );
};

export default Button;
