const bitwiseComplement = (N) => {
  let n = N.toString(2).split('');
  console.log(n);
  for(let i = 0; i < n.length; i++) {
    if(n[i] === '1') n[i] = '0';
    else n[i] = '1'
  };
  let newNum = parseInt(n, 2);
  console.log(newNum);
  return parseInt(n, 2)
};

console.log(bitwiseComplement(5));