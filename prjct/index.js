const http = require('http');
const fs = require('fs');

const PORT = Number(process.env.PORT) || 3000;
const server  = http.createServer((req,res) => {
    console.log('요청 발생');
    console.log(req.method);
    // 응답헤더
    res.setHeader("Content-Type","text/html");
    // 응답 본문
    const readStream = fs.createReadStream(__dirname+"/index.html","utf-8");
    readStream.pipe(res);
});
server.listen(PORT, () => {
    console.log(`${PORT}번 포트로 서버 실행 중`);
});