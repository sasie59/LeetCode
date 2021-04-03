const reverse = (x) => {
  const sign = Math.sign(x);
  x = parseInt(x.toString().split("").reverse().join("")) * sign;
  if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) return 0;
  return x;
};

console.log(reverse(1234));