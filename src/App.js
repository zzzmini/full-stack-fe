import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    // /api/time 엔드포인트로 GET 요청을 보냄
    axios.get('http://3.37.155.248:8080/api/time')
      .then(response => {
        setCurrentTime(response.data);
      })
      .catch(error => {
        console.error('API 호출 중 오류 발생:', error);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행
  
  return (
    <div className="App">
      <div className="App"><h1>현재 시간</h1><p>{currentTime}</p></div>
    </div>
  );
}

export default App;
