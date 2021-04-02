import React, { useState } from "react";

const reverse = (x) => {
  const sign = Math.sign(x);
  x = parseInt(x.toString().split("").reverse().join("")) * sign;
  if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) return 0;
  return x;
};

export default function LC7() {
  const [number,setReverse] = useState("78541");

  const handeleClick = () => {
    setReverse(reverse(number));
  };

  return (
    <div>
      <button
        onClick={handeleClick}
      >{number}</button>
    </div>
  );
}
