import React from "react";
import "./App.css";

const App = () => {
  const clickhandler = () => {
    alert("I am Clicked");
    prompt("I am touching this");
  };
  const handlerMouseover = () => {
    alert("Para k uper mouse lekr aaye ho");
  };
  const handlerInputChange = () => {
    console.log("Input me value change hui hai");
  };
  const handlSubmit = (e) => {
    e.preventDefault();
    alert("Form submit kr dun kya");
  };

  return (
    <div>
      <form onSubmit={handlSubmit}>
        <input type="text" onChange={handlerInputChange} />
        <button type="submit">Submit</button>
      </form>
      <p
        onMouseOver={handlerMouseover}
        style={{
          color: "red",
          backgroundColor: "yellow",
          border: "10px solid black",
        }}
      >
        I am a Para
      </p>
      <button onClick={clickhandler}>click me</button>
    </div>
  );
};

export default App;
