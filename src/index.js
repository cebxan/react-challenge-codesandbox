import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Box } from "./box";


const App = (props) => {
  const colors = ["darkgreen", "darkblue", "black", "darkred"];

  /* Create states that hold the values for the current count,
     the text to show and the background color
  */



  const getFizzBuzz = (count) => {
    /*
    The FizzBuzz problems consists on the following premise:
    If the number is multple of 3, you have to show the string Fizz
    If it's multple of 5, show the string Buzz
    If it's multple of both 3 and 5, return the string FizzBuzz
    Otherwise, return the original number
    */
  };



  const getColor = (count) => {
    /* Return a new color by cycling through the array
      depending on the current count */

  };


  const incrementCount = () => {
    /* 
      Increments the count and sets the new text and color
      Use the methods getFizzBuzz for the text and getColor for the color
     */
  };


  return (
    <>
      <button onClick={} type="button">
        Increment
      </button>
      <Box text={} backgroundColor={} />
    </>
  );

};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
