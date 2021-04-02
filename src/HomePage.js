import React from 'react';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <div>
      <h1>LeetCode</h1>
      <Link to='/LC1'>LC1-兩數之和</Link><br/>
      <Link to='/LC7'>LC7-整數反轉</Link><br/>
    </div>
  )
}
