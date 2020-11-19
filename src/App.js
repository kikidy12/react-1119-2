import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameTag from './NameTag'

function test(func) {
  // func 파라미터가 함수일 경우.
  if (func !== null && typeof func === "function") {
    // 파라미터를 실행
    func.call(this, "from test1 was called. ");
  }
}


export default function App() {
  
  let tttt = 'test'
  test(item => {
    tttt = item
  })

  return (
    <div className='App'>
      <NameTag name='test' tag='1' color='red'/>
      <NameTag name='test' tag='2' type='inline'/>
      <NameTag name='test' tag='3' type='breakall'/>
      {tttt}
    </div>
  );
}