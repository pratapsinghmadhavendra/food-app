import React, { useState } from "react";
import Button from "./Button";

const About = () => {
  const [clickValue, setClickValue] = useState(0);

  function handler() {
    // let newValue = "clicked"
    setClickValue(clickValue+1);
    
    
  }

  return (
    <div className="about">
      <h1>About</h1>
      <p>This my very own food app, which is not pretty.</p>
      <button className="abt-btn" onClick={handler}>
        Press me
      </button>
      {/* <p>{clickValue}</p> */}
      <Button 
        counter = {clickValue}
      />
    </div>
  );
};

export default About;
