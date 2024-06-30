import React, { useMemo } from "react";
import { useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [demo, setDemo] = useState(0);
  const [darkTheme, setDarkTheme] = useState(true);
  const prime = useMemo(() => findPrime(demo), [demo]);

  return (
    <div
      className={
        "m-4 p-2 h-96 w-96 border border-black " +
        (darkTheme ? "bg-gray-900 text-white" : "")
      }
    >
      <div>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="m-10 p-2 bg-green-200"
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border-black border w-72 px-2"
          type="number"
          value={demo}
          onChange={(e) => {
            setDemo(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>nth Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
