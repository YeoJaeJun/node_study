// router file에서는 웹과 관련된 주소만을 설정한다. 그리고 마지막에 javascript 언어를 이용해 주소를 내보낸다.

const express = require('express');
const router = express.Router();

// 주소 생성
router.get("/", function(req, res){
    // 그림 파일을 전달할 때는 render를 사용한다. render는 항상 views 폴더를 바라보고 있다. 그래서 하위 경로만 설정하면 된다.
    // view engine을 사용하면 아래와 같이 데이터도 같이 전달할 수 있다.
    res.render('index', {title: 'EJS 메인 페이지'});
})

// 세부 소개 페이지 생성
router.get("/about", function(req, res) {
    res.send("About Page");
})



// 주소 정보를 가지고 있는 router 변수를 내보낸다. 이 과정이 있어야만 app.js에서 사용 가능하다.
module.exports = router;