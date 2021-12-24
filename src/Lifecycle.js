import React, { useState, useEffect } from "react";
console.log('pre-renders');
export default function Lifecycle() {
  
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  useEffect(() => {
      console.log('use effect sin dependencia')
  });
  useEffect(() => {
    console.log('use effect con dependencia')

  }, []);
  useEffect(() => {
      console.log('cambio en counter 1');
  }, [counter1])
  return (
    <div>
      <h1>{counter1}</h1>
      <h2>{counter2}</h2>
      <button onClick={() => setCounter1(counter1 + 1)}>
        Sumar contador 1
      </button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Sumar contador 2
      </button>
    </div>
  );
}
