// node.js로 서버 개발을 쉽게 하려면 express를 사용하면 된다.
// express를 사요하려면 아래와 같이 기본 설정을 해야 한다.
const express = require("express");
const helmet = require("helmet");
const app = express();

const ejs = require('ejs');
// 화면을 보여줄 때는 아래의 세 줄이 필수다.
// 그림을 서버에 보여줄 때 어떻게 보여줄 것인지 설정한다. ejs로 설정한다. 이때 file의 확장자가 ejs여야만 실행된다.
app.set('view engine', 'ejs');
// 그림이 담겨있는 주소를 알려준다. 여기서 그림은 html을 뜻한다.
app.set('views', './views')
// css가 담겨있는 주소를 알려준다. css는 public 폴더에 있다. 뒤의 코드는 현재 file(app.js)에서 public 폴더까지의 상대경로를 자동으로 생성해준다.
app.use('/public', express.static(__dirname + '/public'));


// 보안 강화
app.use(helmet());
// post 방식으로 받은 값을 확인할 수 있게 설정
app.use(express.json());
app.use(express.urlencoded());


// middleware는 req와 res 사이에 존재하는 것이다. 정해진 규칙대로만 코드가 실행되게 한다.
// 요청을 받고 응답을 하기 전에 middleware를 이용해 점검을 하는 것이다.
// 요청이 이상하면 middleware가 걸러준다. ex) 해킹
// app.use()를 통해 middleware를 설정하는 것이다. 위의 app.use(helmet()) 역시 middleware이다.


// mainRouter를 사용할 수 있게 한다.
// mainRouter 변수는 mainRouter.js의 router 변수를 받는다.
const mainRouter = require('./router/mainRouter');
// middleware를 설정한다. '/'는 주소창의 슬래시이다. 다른 걸 넣어도 된다.
// 아래와 같은 과정을 통해 middleware를 설정하는 것이다. 관리를 용이하게 해준다.
app.use('/', mainRouter);



// 스위치 생성 - 컴퓨터의 3000번 port를 사용해 서버를 실행한다고 정의
app.listen(3000, function(req, res){
    console.log("서버가 실행되고 있습니다.");
})