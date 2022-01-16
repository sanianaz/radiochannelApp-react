import React from "react";
import "../src/Greeting.css";

let cssStyle = {};

let greeting = "";
let currDate = new Date();
// we can hardcode values took
// let currDate = new Date(2022, 5, 5, 20);

currDate = currDate.getHours();

if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currDate >= 12 && currDate <= 19) {
  greeting = "Good Evening";
  cssStyle.color = "red";
} else {
  greeting = "Good Night";
  cssStyle.color = "blue";
}

function Greetings() {
  return (
    <div className="container">
      <h1>
        {" "}
        Hello Listener, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  );
}

export default Greetings;
