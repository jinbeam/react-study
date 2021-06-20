import { useState } from 'react';

const BaseballGame = () => {
  // 랜덤 숫자 string
  const [answer, setAnswer] = useState(
    (
      ""
      +Math.floor(Math.random()*10)
      +Math.floor(Math.random()*10)
      +Math.floor(Math.random()*10)
      +Math.floor(Math.random()*10)
    ).split('')
  );

  // 사용자 입력값
  const [value, setValue] = useState('');

  // 시도 횟수
  const [count, setCount] = useState(0);

  // 기록 
  const [records, setRecords] = useState<string[]>([]);

  const handleClick = () => {
    if(value.length !== 4) {
      alert("숫자 4개 입력하세요.");
      return;
    }

    let strike = 0;
    let ball = 0;

    const valueChars = value.split('');
    setCount(count+1);

    answer.forEach((answerChar, answerIndex) => {
      valueChars.forEach((valueChar, valueIndex) => {
        if(valueChar === answerChar && answerIndex === valueIndex) {
          strike++;
        } else if(valueChar === answerChar) {
          ball++;
        }
      });
    });
    
    setRecords([...records, value + ' : ' + strike + ' 스트라이크, ' + ball + '볼입니다.']);
  }

  // 1516 1771
  const handleChange = (e: any) => {
    const value = e.target.value;
    if(value.length > 4) {
      return;
    }
    setValue(value);
  }

  return (
    <div>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={handleClick} >입력</button>
      <p>시도 : { count }</p>
      <ul>
        {
          records.map(record =>
            <li>{record}</li>
            )
          }  
      </ul>
      <p> 정답 : {answer}</p>
    </div>
  )
}

export default BaseballGame;
