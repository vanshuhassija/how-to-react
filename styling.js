import React from "react";
import ReactDOM from "react-dom";
import "./styling.css";
// import "variableName" from "fileName/libraryName"
function tick() {
  const time = new Date().toLocaleTimeString();
  const styles = {
    backgroundColor: "green",
    fontSize: 20, //by default pixels
  };

  const element = (
    <>
      <div className="bg-red">
        <div>{time}</div>
      </div>
      <div
        style={{
          backgroundColor: "green",
          fontSize: 20,
        }}
      >
        Static Content
      </div>
    </>
  );
  ReactDOM.render(element, document.getElementById("root"));
}
setInterval(tick, 1000);
