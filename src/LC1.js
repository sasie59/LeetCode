import React,{useState} from 'react'

const arr = [107,31,51,7,9];

export default function LC1() {
  const [sumOf2Num, setSum] = useState('nothing');

const handleClick = () => setSum(arr[0] + arr[1]);

  return (
    <div>
      <button onClick={handleClick}>{sumOf2Num}</button>
    </div>
  )
}
