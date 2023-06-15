const root = document.getElementById("root");
function render(){
    ReactDOM.render(<Container />, root);
}

// -----------------------------------------------------------------------------------

const Topbar = () => <div style={{display: "flex", fontWeight: "bold"}}>
    <h1 style={{color: "white"}}>녹두레기 다운로드 페이지</h1>
    <a href="files/SoftEther.zip" download><button type="button">VPN 다운로드</button></a>
    <a href="files/SteamSetup.exe" download><button type="button">스팀 설치파일 다운로드</button></a>
    <a href="files/BANDIZIP.exe" download><button type="button">반디집 다운로드</button></a>
    <a href="files/ADOFI.zip" download><button type="button">스팀 얼불춤 다운로드</button></a>
    <a href="files/Human.zip" download><button type="button">스팀 휴폴플 다운로드</button></a>
    <a href="files/Slime.zip" download><button type="button">스팀 슬라임레이서 다운로드</button></a>
    <a href="files/Poly2.zip" download><button type="button">스팀 폴리브릿지2 다운로드</button></a>
    <a href="files/Sanabi.zip" download><button type="button">스팀 산나비 다운로드</button></a>
</div>

// -----------------------------------------------------------------------------------

const Container = () =>
<div>
    <Topbar />
</div>
render()

// ----------------------------------------------------------------------
