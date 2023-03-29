





















// -----------------------------------------------------------------------------------

const root = document.getElementById("root");
function render(){
    ReactDOM.render(<Container />, root);
}

// -----------------------------------------------------------------------------------

const Topbar = () => <div style={{display: "flex"}}>
<h1 style={{marginLeft: "3%", fontSize: "1.9vh"}}>욕시그 검사기</h1>
</div>
const TextInput = () => <div>
    <textarea id="str" style={{height: "60vh", width: "100%", fontFamily: "Nanum Gothic", fontSize: "24pt"}} placeholder="여기 안에 검사할 택스트를 입력해주세요"></textarea>
</div>
var Buttons = () => <div style={{display: "flex"}}>
<button style={{height: "10vh", width: "50%", fontFamily: "Nanum Gothic", fontSize: "2.5vh"}} onClick={reqtest}>검사</button>
<button style={{height: "10vh", width: "25%", fontFamily: "Nanum Gothic", fontSize: "2.5vh"}} onClick={copy}>복사</button>
<button style={{height: "10vh", width: "25%", fontFamily: "Nanum Gothic", fontSize: "2.5vh"}} onClick={reset}>초기화</button>
</div>

// -----------------------------------------------------------------------------------

const Container = () =>
<div>
    <Topbar /> 
    <TextInput />
    <Buttons />
</div>
render()

// ----------------------------------------------------------------------
let result;
const textarea = document.getElementById("str");
// const rankru = document.getElementById("rankru");
// const rankre = document.getElementById("rankre");
// const rankws = document.getElementById("rankws");
const apilink = "https://podoalforbidden-gtsni.run.goorm.site"
const textareaValue = textarea.value;
function getfor(str) {
    return fetch(apilink + "/api/get/detect?str=" + encodeURIComponent(str))
        .then(response => response.json())
        .then(data => textarea.value = data)
        .catch(error => console.error(error));
}
// function getchart(songn, h1){
//     return fetch(apilink + "/api/get/chart?songn=" + encodeURIComponent(songn))
//         .then(response => response.json())
//         .then(data => {h1.innerText=data;})
//        .catch(error => console.error(error));
// }
function reset() {
    textarea.value = "";
}

function reqtest() {
        var getdata = getfor(textarea.value);
}
function copy(){
    textarea.select();
    document.execCommand('copy');
}
// getchart("잠깐 나올래", rankru);
// getchart("리와인드", rankre);
// getchart("겨울봄", rankws);