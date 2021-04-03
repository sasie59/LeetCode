import React,{useState} from 'react';
var obj = {
  I : 1,
  V : 5,
  X : 10,
  L : 50,
  C : 100,
  D : 500,
  M : 1000,
};           
export default function LC13() {
  const [roman, ] = useState("MCMXCIV");
  const [int , setRToM] = useState(0);

  const handleClick = () => {
    // console.warn(obj[roman[0]]);
    let sum = 0;
    for(let i = 0 ;i < roman.length; i++) {
      if(obj[roman[i]] === obj[roman[i + 1]] || obj[roman[i]] > obj[roman[i + 1]]) {
        sum = sum + obj[roman[i]]
      } else if(i === roman.length - 1) {
        setRToM(int + obj[roman[i]]);
      } else setRToM(int - obj[roman[i]]) 
    }
    return int;
  };
  return (
    <div>
      <button onClick={handleClick}>{roman}</button>
      <div>{int}</div>
    </div>
  )
};
