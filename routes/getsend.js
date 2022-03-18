var express = require('express')
var router = express.Router();

router.get('/',(req, res) => {
    res.send('/getsend라는 요청의 응답일뿐 ');
})

module.exports = router;