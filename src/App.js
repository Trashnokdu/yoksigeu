import './App.css';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [text, setText] = useState("");
  const copy = () => {
    window.navigator.clipboard.writeText(text)
    copynotify()
  }
  const donenotify = () => {
    toast("완료되었습니다! 하단의 복사버튼으로 복사하세요!")
  }
  const getfor = () => {
    return fetch("https://yoksigeu.xyz:8443" + "/api/get/detect?str=" + encodeURIComponent(text))
    .then(response => response.json())
    .then(data => {
      setText(data);
      donenotify()
    })
    .catch(error => console.error(error));
  }
  const copynotify = () => {
    toast("복사되었습니다!")
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
          style={{height: "74vh", width: "100%", fontSize: "1rem", resize: "none", border: "none", outline: "none"}} 
          placeholder="여기 안에 검사할 텍스트를 입력해주세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
        <button className='btn' id='detect' onClick={getfor} style={{height: "9.2%", width: "50%", backgroundColor: '#0F0F0F', borderRadius: "0", color: "white", fontSize: "2em", borderRight: "solid gray"}}>검사하기</button>
        <button className='btn' id='copy' onClick={copy} style={{height: "9.2%", width: "50%", backgroundColor: '#0F0F0F', borderRadius: "0", color: "white", fontSize: "2em"}}>복사하기</button>
        </div>
        <div>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8338001638680274"
             crossOrigin="anonymous"></script>
        <ins className="adsbygoogle"
             style={{display: 'block'}}
             data-ad-format="fluid"
             data-ad-layout-key="-fb+5w+4e-db+86"
             data-ad-client="ca-pub-8338001638680274"
             data-ad-slot="9898474422"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        </div>
    </div>
  );
}
export default App;
