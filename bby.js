var express = require('express')
var app = express();

app.get('/',(req, res) => {
    res.send('첫페이지 무사출력되나?');
})

app.listen(8080, () => {
    console.log('콘솔창을 확인해봐 서버구동완료')
})