## [React.JS Practices](https://github.com/kickscar-javascript/react-practices) / [ch01](https://github.com/kickscar-javascript/react-practices/tree/master/ch01) / 실습1. DOM API 기반 애플리케이션

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

​	간단한 예제 코드다. id가 'root' 인 `div` HTML Element만 있다.  index.js를 다운로드하여 Javascript 코드가 바로 실행될 것이다.

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

​	ES6로 작성되었으며 `Browser DOM API` 호출하는 코드다. 이 코드는 브라우저에서 실행되기 때문에 ES6에 대한 브라우저 호환성을 체크해 보아야 한다. [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/) 를 참고해 보면 대중적인 브라우저 중에 IE11이 ES6 부분적 지원을 하고 대부분은 별 문제없이 지원하고 있다. 예제 코드 정도는 IE11에서도 지원하니 ES5 하위 트랜스파일링은 이 예제에서는 필요가 없다. 

1. App 함수는  `<h1>Hello World<h1>`  HTMLElement 를 생성해 반환한다.
2. 브라우저에 로딩된 문서(Index.html)에서 id가 'root'인  element를 찾아 App() 함수에서 반환한 HTMLElement를 자식 element로 추가 한다. 

#### 2. Express 서버 작성 및 실행

​	로컬에서 index.html를 브라우저에서 로딩해도 예제를 실행시키는 데는 문제없지만, 간단한 Node 웹서버를 통해 네트워크로 접근해 보자.

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

   Module 임포트를 ES6 Module 시스템을 사용한다. node는 v14+ 부터 지원하며 이를 위해 매니페스트 파일 package.json을 다음과 같이 수정해야 한다.

   ```json
   {
   			.
     		.
       "type": "module",
     		.
     		.
   }
   ```

2. 실행

   ```bash
   $ node server.js
   starts server on port 8080
   
   ```

3. 확인

   <img src="http://image.kickscar.me:8080/markdown/react-practices/ch01-0001.png" alt="s" style="zoom:40%;" />

​    

#### 3.결론

​	예제는 그동안 오랫동안 프론트엔트 Javascript 프로그래밍 방법이다. 브라우저는 HTML문서의 Tag를 기반으로 브라우저의 DOM을 구성하고 DOM 접근을 위해 DOM API를  JavaScript 코드로 호출하여 DOM에 노드를 추가, 수정 및 삭제하였다. DOM이 변하면 브라우저는 화면을 다시 렌더링하고 사용자는 동적변화되는 화면을 볼 수 있었다.

​	다음은 index.html에 없던 h1 Element가 동적으로 추가된 DOM  구조를 보여준다.

  <img src="http://image.kickscar.me:8080/markdown/react-practices/ch01-0002.png" alt="s" style="zoom:50%;" /> 

​	DOM API를 직접 호출하는 프로그래밍 방법도 있지만 보통은 jQuery와 같은 DOM의 노드 선택 그리고 조작에 특화된 라이브러리를 사용하기도 한다. 그래도 브라우저 DOM을 직접 조작하는 것은 마찬가지다. 이 방법은 최종적인 실행 코드 전달이 쉽고(작성한대로 JS파일에 담아 html에 링크하면 된다.) 그간 축적해온 경험 그리고 훌륭한 라이브러리와 MVC아키텍처에 기반한 편리한 프레임워크들이 존재하기 때문에 그 수명은 당분간 지속될 것이다. 

​	그러면, 왜 직접 브라우저의 직접적인 DOM을 조작 대신에 React, Vue, Angular와 같은 반응형 UI 렌더링 엔진(Virtual DOM 조작)에 기반한 라이브러리와 프레임워크가 개발되어 화면 개발에 사용될까? (그 중에서도 React.JS)

 1. 프론트엔드 프로그래밍 코드의 양이 많아졌다. 

    ​	SPA는 사용자가 애플리케이션과 끊임없이 상호작용하고 새로운 데이터를 API서버로 부터 가져오고 DOM을 변화 시킨다. 화면과 기능이 복잡해 지면서 애플리케이션의 현재 상태를 조사하고 변경사항을 DOM에 반영하고 업데이트는 하는 작업이 복잡해지면서 코드양이 상당히 많아졌다.

    ​	사실 코드양은 문제가 아니다. 이런 작업을 하는 코드를 체계화하고 패턴화하는 프로그래밍 모델이 필요하다. 물론 증가하는 복잡성을 해결하고 화면과 상태 동기화와 데이터 바인딩하는 프레임워크가 있기는 했지만 유지관리성, 확장성 그리고 특히 성능에서 단점이 있다.

 2. 반응형 렌더링

    기존 데이터 바인딩보다 반응형 렌더링은 장점이 많다. 컴포넌트 기반의 동작과 모양을 선언식으로 정의하는 프로그래밍 모델로 작성된 화면에서 반응형 UI 렌더링 엔진은 데이터의 변경(상태 변화)를 감지하고 이 데이터의 변화에 관심 있는 화면의 컴포넌트만 선별적으로 렌더링 해준다. 

    ​	엔진의 API 함수를 사용하게 되면 브라우저의 실제 DOM을 조작하지 않고 Virtual DOM에 변경사항을 반영하게 된다. 엔진은 Virtual DOM의 변경사항과 실제 DOM의 상태를 비교하여 최소의 변경 셋을 엔진 알고리즘으로 추출하여 실제 DOM에 반영한다. 이는 직접적인 DOM 조작에 비해 아주 빠르고 효율적인 화면 업데이트를 보장해준다.  

 3. React가 진보적인 이유

    ​	반응형 UI 렌더링 엔진을 기반하고 있는 라이브러리와 프레임워크들은 공통적으로 애플리케이션의 모든 부분을 독립형 구성요소인 컴포넌트로 구성하는 프로그래밍 방식을 택하고 있다. 이는 화면을 작성하는 프로그래밍에서 상식화 되어 있는 복잡성을 다루는 설계와 구현 원칙으로 작게 유지하고 조합하여 복잡하고 많은 기능의 콤포넌트를 손쉽게 다룰 수 있게 해준다.

    ​	**"React가 다른 반응형 UI 렌더링 엔진 기반의 프레임워크보다 진보적인 이유는 컴포넌트를  JavaScript 코드만으로 작성이 가능하다."**

     웹 애플리케이션의 화면을 표시하기 위해서는 배열에 담긴 객체 수만큼 `<li>` 표시한다 던가 또는 어떤 변수가 null 이면 `<div>` 블록을 건너 뛰는 것 과 같은 `표시 논리`가 필요하고 `<li>` 또는 `<div>` 와 같은 마크업 그리고 css 스타일링, 이미지등의 에셋도 필요하다. 

    ​	언급한 웹화면 요소의 관심분리를 위해 초창기에는 강제적으로 언어를 다르게 하였다. 표시 논리는 JavaScript, 콘텐츠 구조는 마크업(HTML) 그리고 스타일링은 CSS로 작성했다. 하지만, 엄밀히 말하면 기술의 분리이지 관심의 분리가 아니다. 그리고 현대 웹 애플리케이션에서는 이 것들은 서로 밀접한 연관성이 있기 때문에 분리 대상도 아니며 규모때문에 복잡성과 관리 부담만 오히려 늘어난다.

    ​	이를 조금 해결한 것은 다양하고 많은 별도의 HTML 지시문으로 구성된 템플릿 언어를 사용하는 것이다. 하지만 별도의 템플릿 언어가 JavaScript보다 더 프레임워크 또는 라이브러리 추상화의 핵심이 되어 표준없는 렌더링 규칙과 문법이 제 각각인 템플릿 엔진 또는 언어들이 개발에 부담이 된다. 

    ​	React는 **"표시 논리와 마크업이 서로 밀접하게 연관되어 있다."** 는 원칙으로  JavaScript 로만 표시 논리와 마크업이 함께 가능하도록 기술들을 고도로 추상화 시켰고 결과는 JavaScript 기반의 완전한 기능을 갖춘 프로그래밍 언어 JSX가 핵심이 된다.  React 코드를 보면 낯설기도 하고 특이한 점이 JavaScript 코드상에 표시 논리와 마크업이 함께 나타난다는 것인데,  JavaScrip 코드로 클래스 또는 함수로 선언된 React 컴포넌트는 화면에 표시되는 렌더링 코드에서는 표시 논리와 함께 마크업으로 나타난다. 

    ​	밀접하게 연관된 기술들을 무리하게 분리하지 않고 고도의 추상화를 통해 웹화면 개발은 JavaScript로만 연관된 기술을 함께 표현하는 것은 어찌보면 당연하고 단순하지만 큰 장점이다.

​	  