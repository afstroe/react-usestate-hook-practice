import React from "react";

//Challenge:
//1. Given that you can get the current time using:
// let time = new Date().toLocaleTimeString();
// console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

function App() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const [time2, setTime2] = React.useState(new Date().toLocaleTimeString());
  setInterval(() => setTime2(new Date().toLocaleTimeString()), 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <h2>{time2}</h2>

      <button
        onClick={() => {
          setTime(new Date().toLocaleTimeString());
        }}
      >
        Get Time
      </button>
    </div>
  );
}

export default App;
