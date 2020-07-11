## [React.JS Practices](https://github.com/kickscar-javascript/react-practices) / [ch01](https://github.com/kickscar-javascript/react-practices/tree/master/ch01) / 실습1. DOM API 기반 애플리케이션

React 라이브러리를 이용해 애플리케이션을 작성해 보기 전에 전통적인 프론트엔트 프로그래밍 방법인 브라우저의 DOM을 직접 조작하는 예제를 살펴본다. 이 다음 예제들에서는 단계적으로 똑같은 기능의 React 애플리케이션으로 리팩토링 되어 갈 것이다. 이 과정을 통해 전통적인 DOM 조작 애플리케이션과 React 기반 애플리케이션의 차이점을 비교해 본다.   

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

​	간단한 예제 코드다. id가 'root' 인 `div` HTML Element만 있다.  index.js의 Javascript 코드가 다운로드되어 바로 실행될 것이다.

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

​	ES6로 작성 되었으며 간단한 Browser의 `DOM API` 를 호출하는 코드다. 이 코드는 브라우저에서 실행되기 때문에 ES6에 대한 브라우저 호환성을 체크해 보아야 한다. [ECMAScript compatibility table](https://kangax.github.io/compat-table/es6/) 를 참고해 보면 대중적인 브라우저 중에 IE11이 ES6을 부분적으로 지원하고 대부분 브라우저는 별 문제없이 지원하고 있다. 하지만, 예제 코드 정도는 IE11에서도 지원하니 ES5 하위 트랜스파일링은 이 예제에서는 필요가 없다. 

1. App 함수는  `<h1>Hello World<h1>`  HTMLElement 를 생성해 반환한다.
2. 브라우저에 로딩된 문서(Index.html)에서 id가 'root'인  Element를 찾아 App() 함수에서 반환한 HTMLElement를 자식 Element로 추가 한다. 

#### 2. Express 서버 작성 및 실행

​	로컬에서 index.html를 브라우저에서 로딩해도 예제를 실행시키는 데는 문제가 없지만, 간단한 Node 웹서버를 통해 네트워크로 접근해 보자.

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

   ​	ES6 Module 시스템을 사용하는데, node는 v14+ 부터 지원하며 이를 위해 매니페스트 파일 package.json을 다음과 같이 수정해야 한다.

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
   $ node server
   starts server on port 8080
   
   ```

3. 확인

   <img src="http://image.kickscar.me:8080/markdown/react-practices/ch01-0001.png" alt="s" style="zoom:40%;" />

​    

#### 3.결론

​	이 예제는 간단하지만 전통적인 프론트엔트 Javascript 프로그래밍 방식을 보여준다. 브라우저는 HTML문서를 파싱하여 DOM을 구성하고 JavaScript 코드는 DOM API를 사용하여 DOM에 노드를 추가, 수정 및 삭제 등의 업데이트를 한다. DOM이 변하면 브라우저는 화면을 다시 렌더링하고 사용자는 동적으로 변화되는 화면을 볼 수 있다.

​	다음은 index.html에 없던 h1 Element가 동적으로 추가된 DOM 구조를 보여준다.

  <img src="http://image.kickscar.me:8080/markdown/react-practices/ch01-0002.png" alt="s" style="zoom:50%;" /> 

​	DOM API를 직접 호출하는 프로그래밍 방법도 있지만 보통은 jQuery와 같은 DOM의 노드 선택 그리고 조작에 특화된 라이브러리를 사용하기도 한다. 그래도 브라우저 DOM을 직접 조작하는 것은 마찬가지다. 이 방법은 최종적인 실행 코드 전달이 쉽고(작성한대로 JS파일에 담아 html에 링크하면 된다.) 그간 축적해온 프로그래밍 경험 그리고 꽤 안정적이고 검증된 라이브러리와 MVC아키텍처에 기반한 프레임워크들이 존재하기 때문에 그 수명은 당분간 지속될 것이다. 

​	그러면, 왜 직접적인 브라우저의 DOM을 조작 대신에 React, Vue, Angular와 같은 반응형 UI 렌더링 엔진(Virtual DOM 조작)에 기반한 라이브러리와 프레임워크가 개발되고 화면 개발에 사용해야 할까? (그 중에서도 React...?)

 1. 프론트엔드 프로그래밍 코드의 양이 많아졌다. 

    ​	SPA는 사용자가 애플리케이션과 끊임없이 상호 작용하고 새로운 데이터를 API서버로 부터 가져오고 DOM을 변화 시킨다. 화면과 기능이 복잡해 지면서 애플리케이션은 자신의 현재 상태를 조사하고 변경사항을 DOM에 반영하고 업데이트는 하는 작업이 복잡해졌고 코드양도 상당히 많아졌다.

    ​	사실 코드양은 문제가 아닌 것 같다. 이런 작업을 하는 코드를 체계화하고 패턴화하는 프로그래밍 모델이 필요하다. 물론, 증가하는 복잡성을 해결하고 화면과 상태를 동기화하고 데이터를 바인딩하는 프레임워크가 있기는 했지만 유지 관리성, 확장성 그리고 특히 성능에서 단점이 있었다.

 2. 반응형 렌더링

    기존 데이터 바인딩보다 반응형 렌더링은 장점이 많다. 컴포넌트 기반의 동작과 모양을 선언식으로 정의하는 프로그래밍 모델을 기반으로 작성된 화면에서 반응형 UI 렌더링 엔진은 데이터의 변경(상태 변화)를 감지하고 이 데이터의 변화에 관심 있는 화면의 컴포넌트만을  **선별적 렌더링** 한다. 

    ​	엔진의 API 함수를 사용하게 되면 브라우저의 실제 DOM을 조작하지 않고 Virtual DOM에 변경사항을 반영하게 된다. 엔진은 Virtual DOM의 변경 사항과 실제 DOM의 상태를 비교하여 최소 변경 셋 추출 알고리즘으로 실제 브라우저에 DOM에 반영한다. 이는 직접적인 DOM 조작에 비해 아주 빠르고 효율적인 화면 업데이트를 보장한다.  

 3. React가 창의적인 이유

    ​	반응형 UI 렌더링 엔진을 기반하고 있는 라이브러리와 프레임워크들은 공통적으로 애플리케이션의 모든 부분을 독립형 구성요소인 **컴포넌트** 로 구성하는 프로그래밍 모델을 취하고 있다. 이는 복잡한 화면 프로그래밍에서 상식에 가까운 기본적인 원칙으로 작게 유지하고 조합하여 복잡하고 많은 기능의 콤포넌트를 손쉽게 다룰 수 있게 해준다.

    

    ​	**"반응형 UI 렌더링 엔진 기반 프레이워크 중 React가 창의적인 이유는 컴포넌트를  JavaScript 코드만으로 작성 가능하게 하기 때문이다."**

    

     	애플리케이션의 화면 개발 예를 보면, 배열에 담긴 객체 수만큼 &lt;li&gt; 표시한다 던가 또는 어떤 객체가 null 이면 &lt;div&gt; 블록을 건너 뛰는 것과 같은 `표시 논리`가 필요하고 &lt;li&gt; 또는 &lt;div&gt;와 같은 `마크업` 그리고 `css` 스타일링, `이미지` 등의 에셋도 필요하다. 

    ​	이와 같은 웹 화면 요소의 관심 분리를 위해 초창기에는 강제적으로 언어를 다르게 하였다. 표시 논리는` JavaScript`, 콘텐츠 구조는 `마크업(HTML)` 그리고 스타일링은 CSS로 작성했다. 하지만, 엄밀히 말하면 기술의 분리이지 관심의 분리가 아니다. 그리고 현대 웹 애플리케이션에서는 이 것들은 서로 밀접한 연관성이 있는 것으로 인식하고 있기 때문에 분리 대상도 아니며 애플리케이션 규모가 커지게 되면 복잡성과 관리 부담만 오히려 늘어난다.

    ​	이를 조금 해결한 것이 별도의 다양한 HTML 지시문으로 표시 논리와 마크업을 연관 짓는 템플릿 언어(엔진) 이다. 하지만 별도의 템플릿 언어가 JavaScript 보다 더 프레임워크 또는 라이브러리에서 프로그래밍 모델 추상화의 핵심이 되어버려 표준없는 렌더링 규칙과 제 각각의 문법이 개발에 부담을 준다. 그리고 오래전 부터 서버측 렌더링(jsp, asp, thymeleaf, jade...) 에서 많이 채택하고 있는 방법이기도 하다. 

    ​	React는 **"표시 논리와 마크업이 서로 밀접하게 연관되어 있다."** 는 원칙으로  JavaScript 로만으로 표시 논리와 마크업의 연관이 가능하도록 기술들을 고도로 추상화 시켰다. 결과는 JavaScript 기반의 완전한 기능을 갖춘 프로그래밍 언어 JSX가 핵심이다.  React 코드를 보면 낯설기도 하고 특이한 점이 JavaScript 코드상에 표시 논리와 마크업이 함께 나타난다는 것인데,  JavaScript 코드 클래스 또는 함수로 선언된 React 컴포넌트는 화면 표시를 위한 JavaScript 코드에서는 표시 논리와 함께 마크업으로 나타난다. 

    ​	구현 언어가 달라 이미 분리된 밀접하게 연관된 기술들을 고도의 추상화을 통해  JavaScript로만 함께 표현할 수 있게 한 것은 개발을 아주 단순하게 하는 큰 장점을 가지게 했다. 논리와 화면 마크업 분리를 위해 생겨났던 MVC/MVVM 이런 아키텍쳐와 패턴들을 React 개발에서는 알 필요가 없다.   

​	  