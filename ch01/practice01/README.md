## [React Practices](https://github.com/kickscar-javascript/react-practices) / [ch01](https://github.com/kickscar-javascript/react-practices/tree/master/ch01) / 실습1. DOM API 기반 애플리케이션

React 애플리케이션 작성 전에 브라우저 DOM을 직접 조작하는 예제를 먼저 작성해 본다. ch01 실습들은 이 예제와 같은 기능의 React 애플리케이션으로 리팩토링해 가는 실습들이다. 전통적인 DOM 조작 애플리케이션과 React 기반 애플리케이션의 차이점을 리팩토링 과정을 통해 이해할 수 있을 것이다.   

#### 1. 애플리케이션 작성

##### 1.1 public/index.html

```html
<!DOCTYPE html>
<head>
<meta charset='utf-8'>
<title>Hello World</title>
</head>
<body>
    <div id='root'></div>
    <script src='index.js'></script>
</body>
```

​	코드는 간단하다. id가 'root' 인 `div` 만 있고 index.js 파일이 다운로드 되어 JavaScript 코드가 실행된다.

##### 1.2 public/index.js

```JavaScript
const App = function(){
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;
}

document
    .getElementById('root')
    .appendChild(App());
```

​	ES6 문법으로 작성 되어 있는 간단한 Browser `DOM API` 를 호출하는 코드다. 브라우저에서 실행되기 때문에 ES6 브라우저 호환성을 체크해 보아야 한다. [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/) 를 보면 대부분 브라우저는 ES6을 완벽히 지원하는 데, IE11이 부분적 지원을 한다. 하지만 예제 코드 정도는 IE11에서도 지원 가능한 ES6 코드이기 때문에 하위 트랜스파일링은 필요없다.

1. App 함수는  `<h1>Hello World<h1>`  HTMLElement 객체를 생성해 반환한다.
2. 브라우저에 로딩된 index.html의 id 'root'인  Element를 찾아 App() 함수가 반환한 HTMLElement를 자식으로 추가한다. 

#### 2. Express 서버 작성 및 실행

​	로컬에서 index.html를 브라우저에 로딩하여 예제를 실행시켜도 좋지만 간단한 Node 웹 서버를 작성하고 실행하여 웹 서비스 네트워크 접근을 하도록 한다.

##### 2-1 프로젝트 초기화

1. project-ex01 매니페스트 파일 생성

   ```bash
   $ cd project-ex01
   $ npm init -y
   ```

2. express 패키지 설치

   ```bash
   $ npm i -D express
   ```

##### 2-2 server.js

1. 코드 작성

   ```javascript
   import * as path from 'path'; 
   import express from 'express';
   
   var app = express();
   
   app.use('/', express.static(path.resolve('.', 'public')));
   app.listen(8080, function() {      
     console.log('starts server on port 8080');
   })
   ```

   ​	코드는 ES6 Module 시스템을 사용한다. Node는 v14+ 부터 이를 지원하지만 디폴트로 지원하는 것은 아니다. 프로젝트 매니페스트 파일 package.json에 다음 섹션을 추가하면 Node는 프로젝트의 모든 js 파일을 ES6 모듈로 인식하게 된다.

   ```json
   "type": "module"
   ```
   
2. 실행

   ```bash
   $ node server
   starts server on port 8080
   
   ```

3. 확인

   <img src="http://image.kickscar.me:8080/markdown/react-practices/ch01-0001.png" alt="s" style="zoom:40%;" />

​    

#### 3.결론

​	브라우저는 로드된 HTML문서를 파싱하여 DOM을 구성하고 JavaScript 코드로 DOM API를 호출하여 DOM에 노드를 추가, 수정 및 삭제 등의 업데이트를 한다. DOM이 변하면 브라우저는 화면을 다시 렌더링하고 사용자는 동적으로 변화되는 화면을 볼 수 있는 전통적인 프론트엔드 프로그래밍 방식으로 간단하게 예제를 작성해 보았다.

​	다음은 index.html에 없던 h1 Element가 동적으로 추가된 DOM 구조이다.

  <img src="http://image.kickscar.me:8080/markdown/react-practices/ch01-0002.png" alt="s" style="zoom:50%;" /> 

​	DOM API를 직접 JavaScript 코드로 호출하는 방법도 있지만 보통은 jQuery와 같은 DOM의 노드 선택 그리고 조작에 특화된 JavaScript 라이브러리를 사용한다. 라이브러리를 사용해도 브라우저 DOM을 직접 조작하는 것은 변함없다. 이 방식은 작성된 실행 코드 전달이 쉽고(작성한대로 JS파일에 담아 html에 링크) 오랫동안 축적해온 프로그래밍 경험, 안정적이고 검증된 라이브러리 또는 MVC아키텍처에 기반한 프레임워크들이 존재하기 때문에 그 수명은 당분간 지속될 것이다. 

​	다음 실습은 파일 하나에 있는 JavaScript 코드를 여러 파일로 분리한다. 애플리케이션이 커지거나 중복되는 코드가 있으면 별도의 파일에 코드를 작성하고 여러 파일에서 재사용 하도록 작성하는 것이 바람직하다. 지금, 모듈에 대한 기초적 개념을 언급한 것으로 규모가 큰 애플리케이션 작성을 위해 언어 차원에서 지원하는 기능이다.  실습2, 실습3에서 JavaScript 모듈 지원에 대해서 알아 보도록 한다.
