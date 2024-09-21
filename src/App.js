import './App.css';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const forbiddenword = [
  "강간", "개같", "ㅅ끼", "새끼", "걸래", "게이", "고자", "나대", "나락", "넌씨눈",
  "노인", "눈새", "눈깔", "느개비", "느그", "느금", "도랐", "대가리", "대갈", "대깨",
  "뒤질", "뒈져", "듣보", "등신", "또라이", "로리", "맘충", "망겜", "머가리", "머갈",
  "먹금", "멍청", "못생김", "ㅂㅅ", "ㅂㅈ", "ㅂㅊ", "변태", "별창", "병맛", "보이루",
  "보라니", "븅신", "빙신", "빡쳐", "ㅅㅂ", "ㅅㅃ", "ㅅㅋ", "ㅆㅂ", "ㅆㅃ", "싸개",
  "새끼", "색함", "슈발", "스바", "섹스", "색스", "야스", "ㅅ발", "시발", "씨발",
  "씨빨", "시벌", "씨벌", "씨뻘", "십덕", "십타쿠", "쓰레기", "아가리", "아닥", "아재",
  "알몸", "야동", "아가리", "야랄", "야한", "어쩔", "오타쿠", "애로", "에로", "존내",
  "ㅈㄴ", "ㅈㄹ", "ㅉㅈ", "ㅉㅉ", "자살", "장애", "정병", "조낸", "조루", "죠낸",
  "졸라", "존나", "졸라", "증오", "죽어", "쥰내", "지랄", "찌찌", "찐따", "짱개",
  "창녀", "창놈", "친놈", "초딩", "쿰척", "패드립", "퐁퐁남", "헤으응", "호빠", "한남",
  "한녀", "히로뽕", "졸피뎀", "펜타닐", "필로폰", "메스암페타민", "LSD", "본드", "코카인",
  "헤로인", "fuck", "sex", "tlqkf", "지들이", "음란", "쌔끼", "씨불", "시방", "조까",
  "띠바", "ㅈ같", "여잼", "몰카"
];

function App() {
  const [text, setText] = useState("");
  const replaceChar = "‌";

  const copy = () => {
    window.navigator.clipboard.writeText(text);
    copynotify();
  }

  const donenotify = () => {
    toast("완료되었습니다! 하단의 복사버튼으로 복사하세요!");
  }

  const copynotify = () => {
    toast("복사되었습니다!");
  }

  const detectText = (inputText) => {
    let fine = inputText;
    for (var i = 0; i < forbiddenword.length; i++) {
      var regex = new RegExp(forbiddenword[i], "gi");
      var replacement = forbiddenword[i].split('').join(replaceChar);
      fine = fine.replace(regex, replacement);
    }
    fine = fine.replaceAll('샹', '샹')
               .replaceAll('썅', '썅')
               .replaceAll('씹', '씹')
               .replaceAll('좆', '좆')
               .replaceAll('ㅗ', 'ᅩ');
    return fine;
  }

  const getfor = () => {
    const detectedText = detectText(text);
    setText(detectedText);
    donenotify();
  }

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        limit={1}
        queueLimit={0}
        closeButton={false}
        autoClose={100}
        hideProgressBar
      />
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#161719"}}>
        <div className="container">
          <a className="navbar-brand" href="#">욕시그 검사기</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
        </div>
      </nav>
      <textarea 
        id="str" 
        style={{height: "80svh", width: "100%", fontSize: "1rem", resize: "none", border: "none", outline: "none"}} 
        placeholder="여기 안에 검사할 텍스트를 입력해주세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <button className='btn' id='detect' onClick={getfor} style={{height: "15svh", width: "50%", backgroundColor: '#0F0F0F', borderRadius: "0", color: "white", fontSize: "2em", borderRight: "solid gray"}}>검사하기</button>
        <button className='btn' id='copy' onClick={copy} style={{height: "15svh", width: "50%", backgroundColor: '#0F0F0F', borderRadius: "0", color: "white", fontSize: "2em"}}>복사하기</button>
      </div>
    </div>
  );
}

export default App;