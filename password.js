
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function Passwordgenerate() {
  const [password, setpassword] = useState("");
  const [length, setlength] = useState(8);
  const [numberchange, setnumberchange] = useState(false);
  const [charchange, setcharchange] = useState(false);

  function generatepassword() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberchange) str += "1234567890";
    if (charchange) str += "+_)(*&^%$#@!~";

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setpassword(pass);
  }

  useEffect(() => {
    generatepassword();
  }, [length, numberchange, charchange]);

  return (
    <div className="box">
      <h1>Password Generator</h1>
      <div className="pass">
        <h2>{password}</h2>
        </div> 
      
      <input
        type="range"
        min={5}
        max={30}
        value={length}
        onChange={(e) => setlength(Number(e.target.value))} 
      />
      <label>length is :{length} </label>
      <input
        type="checkbox"
        onChange={() => setnumberchange(!numberchange)}
      />
      <label>number</label>
      <input
        type="checkbox"
        onChange={() => setcharchange(!charchange)}
      />
      <label>character</label>
    </div>
  );
}

const root = createRoot(document.getElementById("display"));
root.render(<Passwordgenerate />);