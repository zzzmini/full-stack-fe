import React, {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    // axios의 기본 설정으로 API URL을 설정
    axios.defaults.baseURL = 'http://0.0.0.0:8080'; // 여기에서 호스트 설정
    // /api/time 엔드포인트로 GET 요청을 보냄
    axios.get('/api/time')
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
