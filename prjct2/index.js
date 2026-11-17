// express 모듈 불러오기 
const express = require('express');

// 서버 생성
const app = express();

const PORT = Number(process.env.PORT) || 3000;

// 라우팅 설정
app.get("/", (req,res) => {
    res.status(200);
    res.send("Hello, Node");
});

app.get("/home", (req,res) => {
    res.status(200);
    res.send("HOME");
});

app.get("/about", (req,res) => {
    res.status(200);
    res.send("ABOUT");
});

app.post("/about", (req,res) => {
    res.status(200);
    res.send("ABOUT");
});


// 서버 실행
app.listen(PORT, () =>{
    console.log(`${PORT}번 포트로 서버 실행 중`);
});