## [React Practices](https://github.com/kickscar-javascript/react-practices) / [ch01](https://github.com/kickscar-javascript/react-practices/tree/master/ch01) / 실습6. JSX 기반 애플리케이션

​	실습6 에서는 순수 React 코드로만 작성된 실습5의 예제를 JSX를 사용한 코드로 리팩토링 할 것이다. React는 JSX 사용을 전제하고 개발되었기 때문에 JSX를 사용하면 콤포넌트 기반 간결한 코드 작성을 가능하게 해준다. 

​	JSX는 JavaScript + XML 문법 체계로 UI요소(컴포넌트)를 작성은 JavaScript로 클래스 또는 함수로 하고 렌더링 코드에서 표현을 XML로 하지만  JavaScript 코드와 함께 사용할 수 있다. 이것은 렌더링 하는 코드가 템플릿 언어가 되어버리는 다른 라이브러리/프레임워크와 구분 되는데 JavaScript가 프론트엔드 화면 개발에 계속 핵심이 될 수 있도록 하는 창의적이고 진보적인 특징이라 볼 수 있다.

​	하지만, JSX 코드는 브라우저에서 실행될 수 없기 때문에 순수 JavaScript 코드로 변환하는 트랜스파일을 해야 한다. 트랜스파일 도구는 유연함과 확장성이 좋은 Babel을 많이 사용한다. 실습에서도 Babel을 사용할 것이다.   

#### 1. 애플리케이션 작성

##### 1-1. Babel 설치 및 설정

​	Babel은 설치해야 할 것이 좀 많다.

1. 트랜스파일 작업을 하는 Babel Core(@babel/core)를 설치해야 한다. 
2. Babel Core는 트랜스파일 작업만 하고 유연함과 확장성을 위해 어떤 언어를 어떤 언어로 어떤 버젼을 어떤 버젼으로 변환할 것인가의 규칙은 preset 또는 plugin으로 분리한다. 여기서는  JSX를 ES6로  변환 하는 프리셋(@babel/preset-react)과 ES6를 다양한 브라우저의 JavaScript에 맞게 변환하는 프리셋(@babel/preset-env) 두 개가 필요하다.
3. 트랜스파일도 여러 빌드 작업들 중에 하나의 작업(태스크)이다. 전체 빌드 과정은 webpack이 진행하기 때문에 webpack이 React 코드로 작성된 js파일의 내용을 Babel Core로 로드해야 Babel이 변환 작업을 할 것이다. webpack의 번들링 과정에서 특정 파일을 특정 처리기로 로드하는 역할을 하는 것을 webpack loader라 하는데 파일 종류에 따라 다양한 loader가 있다. 여기서는 트랜스파일을 위해 babel로 js파일을 로드해야 하는 babel loader(babel-loader)가 필요하다.

```bash
$ npm i -D babel-loader @babel/core @babel/preset-react @babel/preset-env
```

​	각각 설치된 패키지별로 설정 내용을 알아보자.

1. babel loader는 패키지 도메인(@babel) 이 없는 것으로 보아 babel에서 제공하는 것이 아니다. webpack 로더이기 때문에 webpack 설정을 해야 한다. webpack.config.js 에 module 섹션을 추가한다.

   ```javascript
   const path = require('path');
   
   module.exports = {
       entry: path.resolve('src/index.js'),
       output: {
           path: path.resolve('public'),
           filename: 'bundle.js'
       },
       module: {
           rules: [{
               test: /\.js$/,
               exclude: /node_modules/,
               loader: 'babel-loader'
           }]
       }
   }
   ```

2. preset과 plugin 설정은 babel 설정 파일 babel.confing.json 에 한다.

   ```json
   {
       "presets": [["@babel/env", {
           "targets": {
               "ie": "11",
               "edge": "80",
               "firefox": "73",
               "chrome": "82",
               "opera": "69",
               "safari": "13"
           }
       }], "@babel/preset-react"]
   }
   ```

​	Babel에 대한 pratice와 자세한 설정 내용은 [kickscar-javascript/basic-practice/ch02/03.Babel: 트랜스컴파일 도구](https://github.com/kickscar-javascript/basic-practices/tree/master/ch02/03) 을 참고하고 Webpack에 대한 practice와 자세한 설정 내용은 [kickscar-javascript/basic-practice/ch02/07.Webpack:모듈 번들러](https://github.com/kickscar-javascript/basic-practices/tree/master/ch02/07) 을 참고해 먼저 이해한 후, React 프로그래밍을 할 것을 추천한다.

1-2. scr/App.js 작성

1-3. src/index.js 작성


#### 2. Express 서버 작성 작성 

앞의 실습과 같다. 실습 프로젝트에서 복사하거나 앞의 실습의 'Express 서버 작성 및 실행' 부분을 참고하여 server.mjs 작성하고 실행한다.

```bash
$ node server
starts server on port 8080
```

​	브라우저로 접근해 보면 잘 작동하는 것을 확인할 수 있다.

#### 3. 결론

​	 반응형 UI 렌더링 엔진을 기반하고 있는 라이브러리/프레임워크 중에서 왜 React 인가? 

​	반응형 UI 렌더링 엔진을 기반하고 있는 라이브러리와 프레임워크들은 공통적으로 애플리케이션의 모든 부분을 독립형 구성요소인 **컴포넌트** 로 구성하는 프로그래밍 모델을 취하고 있다. 이는 복잡한 화면 프로그래밍에서 상식에 가까운 기본적인 원칙으로 작게 유지하고 조합하여 복잡하고 많은 기능의 콤포넌트를 손쉽게 다룰 수 있게 해준다.

​	**"반응형 UI 렌더링 엔진 기반 프레이워크 중 React가 창의적인 이유는 컴포넌트를  JavaScript 코드만으로 작성 가능하게 하기 때문이다."**

 	애플리케이션의 화면 개발 예를 보면, 배열에 담긴 객체 수만큼 &lt;li&gt; 표시한다 던가 또는 어떤 객체가 null 이면 &lt;div&gt; 블록을 건너 뛰는 것과 같은 `표시 논리`가 필요하고 &lt;li&gt; 또는 &lt;div&gt;와 같은 `마크업` 그리고 `css` 스타일링, `이미지` 등의 에셋도 필요하다. 

​	이와 같은 웹 화면 요소의 관심 분리를 위해 초창기에는 강제적으로 언어를 다르게 하였다. 표시 논리는` JavaScript`, 콘텐츠 구조는 `마크업(HTML)` 그리고 스타일링은 CSS로 작성했다. 하지만, 엄밀히 말하면 기술의 분리이지 관심의 분리가 아니다. 그리고 현대 웹 애플리케이션에서는 이것들은 서로 밀접한 연관성이 있는 것으로 인식하고 있기 때문에 분리 대상도 아니며 애플리케이션 규모가 커지게 되면 복잡성과 관리 부담만 오히려 늘어난다.

​	이를 조금 해결한 것이 별도의 다양한 HTML 지시문으로 표시 논리와 마크업을 연관 짓는 템플릿 언어(엔진) 이다. 하지만 별도의 템플릿 언어가 JavaScript 보다 더 프레임워크 또는 라이브러리에서 프로그래밍 모델 추상화의 핵심이 되어버려 표준없는 렌더링 규칙과 제 각각의 문법이 개발에 부담을 준다. 그리고 오래전 부터 서버측 렌더링(jsp, asp, thymeleaf, jade...) 에서 많이 채택하고 있는 방법이기도 하다. 

​	React는 **"표시 논리와 마크업이 서로 밀접하게 연관되어 있다."** 는 원칙으로  JavaScript 로만으로 표시 논리와 마크업의 연관이 가능하도록 기술들을 고도로 추상화 시켰는데 그 결과가 JavaScript 기반의 완전한 기능을 갖춘 프로그래밍 언어 JSX가 핵심이다.  React 코드를 보면 낯설기도 하고 특이한 점이 JavaScript 코드상에 표시 논리와 마크업이 함께 나타난다는 것인데,  JavaScript 코드 클래스 또는 함수로 선언된 React 컴포넌트는 화면 표시를 위한 JavaScript 코드에서는 표시 논리와 함께 마크업으로 나타난다. 

​	구현 언어가 달라 이미 분리된 밀접하게 연관된 기술들을 고도의 추상화을 통해  JavaScript로만 함께 표현할 수 있게 한 것은 개발을 아주 단순하게 하는 큰 장점을 가지고 있다. 논리와 화면 마크업 분리를 위해 생겨났던 MVC/MVVM 이런 아키텍쳐와 패턴들을 React 개발에서는 알 필요가 없다.    

​	  