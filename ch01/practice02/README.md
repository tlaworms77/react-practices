## [React.JS Practices](https://github.com/kickscar-javascript/react-practices) / [ch01](https://github.com/kickscar-javascript/react-practices/tree/master/ch01) / 실습2. 애플리케이션의 분리

​	복잡한 애플리케이션은 코드를 분리하여 개발하는 것이 바람직하다. 실습1은 사실 애플리케이션이라 하기에도 민망할 정도로 단순하지만 실습2에서는 이 애플리케이션을 분리해서 개발해 볼 것이다. 이 실습에서는 애플리케이션 코드를 여러 js파일에 옮기는 단순한 분리를 할 것이다. 그리고 이 단순한 분리 방식이 가지는 문제점을 결론에서 언급하고 실습3에 넘겨 해결하도록 한다. 

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
    <script src='App.js'></script>
    <script src='index.js'></script>
</body>
```

​	실습1과 애플리케이션 자체는 완전 동일하다. 다른 것은 JavaScript 코드를 App.js와 index.js 로 분리 하였기 때문에 js파일 링크가 두 개이다.

##### 1.2 public/index.js

```JavaScript
document
    .getElementById('root')
    .appendChild(App());
```

​	실습1과 애플리케이션 기능은 같지만 코드 분리가 목적이기 때문에 App() 함수만 App.js로 분리하고 나머지 코드는 남겼다.

##### 1.3 public/App.js

```JavaScript
const App = function(){
    const app = document.createElement('h1');
    app.textContent = 'Hello World';
    return app;
}
```

​	index.js에 있던 App() 함수 정의 코드를 단순히 App.js로 분리했다.

#### 2. Express 서버 작성 및 실행

​	앞의 실습1과 같다.

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

   ​	ES6 Module 시스템 지원(package.json)

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

#### 3.결론

​	단순하게 코드 분리만 한 애플리케이션도 별 무리 없이 작동하는 것 처럼 보인다. 하지만, index.js 파일이 App.js 보다 먼저 브라우저에 로딩되면 문제가 발생한다. index.html에 기술한 순서가 js 파일 로딩 순서를 보장하지 않는다. 파일 크기의 차이, 웹 서버 상태 그리고 네트워크 상태등 순서를 보장할 수 없는 요인들이 많다.(대부분 브라우저는 한 문서 안의 js, css, 이미지 등 외부 자원들의 로딩은 개별 쓰레드로 동작한다,) 

​	어찌 어찌하여 순서를 보장해도 개발 과정에 문제점이 여전히 남아 있다.  예제는 단순해서 의존성이 명확하고 실행 순서도 명확하지만 애플리케이션이 조금만 커지고 복잡해져 분리된 파일이 많아지면 의존성 관리 자체가 불가능하거나 만만치 않다. 다음은 index.html에 js 파일의 순서를 강제로 바꿔 테스트 해 본 결과다.

##### 3.1 public/index.html

```html
<!DOCTYPE html>
<head>
<meta charset='utf-8'>
<title>Hello World</title>
</head>
<body>
    <div id='root'></div>
    <script src='index.js'></script>
    <script src='App.js'></script>
</body>
```

##### 3.2 결과  

<img src="http://image.kickscar.me:8080/markdown/react-practices/ch01-0003.png" alt="s" style="zoom:40%;" />

​	index.js 가 먼저 로딩되어 실행되면,

```javascript
document
    .getElementById('root')
    .appendChild(App());
```

​	이 코드의 실행 시점에서는 App 함수가 정의 되지 않아 에러가 발생한다. 이 문제를 해결하기 위해서는 로딩 순서에 상관 없이 각 파일(모듈) 의존성을 보장해 주는 것이 필요하다. 이 것만 되면, 복잡한 애플리케이션 분리 문제만 개발에서 집중 할 수 있다. 다음 실습에서는` JavaScript 모듈 시스템` 을 언급할 것이다. 이 보장을 해 주는 것이 바로  `ES6 모듈 지원`이다.

​	

 