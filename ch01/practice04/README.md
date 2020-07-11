## [React.JS Practices](https://github.com/kickscar-javascript/react-practices) / [ch01](https://github.com/kickscar-javascript/react-practices/tree/master/ch01) / 실습4. 애플리케이션 번들링

​	실습3에서 ES6 모듈로 분리된 애플리케이션을 webpack을 사용해 하나의 번들 파일로 번들링 하는 실습을 할 것이다. 앞의 실습3에서도 확인 했지만 최근 브라우저들이 ES6 모듈을 지원하기 때문에 개별 분리된 모듈들을 html 문서에서 링크해도 원칙적으로 애플리케이션 실행에 문제는 없다.

​	하지만, 고려해야 할 것은 애플리케이션이 모듈로 작게 분리되면 모듈 수가 많아지고 html 파일에 각각의 모듈을 링크거는 작업도 만만치 않지만 다운로드를 위한 브라우저와 서버 사이의 네트워크 연결도 큰 부담이다. 방법은 작게 분리된 모듈의 의존성을 분석해 다시 하나의 js파일로 묶어 브라우저에 배포하는 것이다. 쉽게 말하면, 애플리케이션을 개발할 때는 작은 모듈로 나눠 개발하고 배포를 위한 빌드에서는 하나의 js파일로 묶는 것이다. 이 js파일을 번들이라 부른다. 번들링 도구는 webpack을 주로 사용하는 데 실습에서도 webpack을 사용할 것이다. 

​	번들링 과정은 단순히 의존성을 분석해 모듈로 파편화 되어 있는 JavaScript 코드들을 하나로 합치는 것만을 의미 하지 않는다. 번들 과정에서 모든 코드는 난독화 과정을 통한 압축 작업을 하고 문법 체크를 위한 린팅(linting) 작업, 문서화 작업 그리고 테스팅도 할 수도 있다. 애플리케이션 빌드 과정이라 보면 된다. 번들링이라 부르는 것은 최종 결과물이 하나의 파일로 묶인 번들이기 때문이다.

​	그리고 대부분 번들링 도구는 js파일 만을 모듈로 취급하지 않는다. 하나의 웹 애플리케이션을 구성하는 JavaScript, css, html, image 등은 오래전 부터 기술로 강제적으로 분리(구현 언어가 다름)되어 있었지만 최근 번들링 기반의 빌드 도구들은 분리 대상이 아닌 밀접한 연관성을 가진 모듈로 이 기술들을 추상화하였다. 쉽게 말하면,  JavaScript, css, html, image 라는 기술 상관없이 하나의 웹 애플리케이션을 구성한다는 공통점이 있으면 모듈로 취급하여 번들링 대상이 된다는 것이다. 개발자가 해야 할 것은 의외로 쉬운데 import로 의존성만 표시하면 된다.

​	마지막으로 강조하고 싶은 것은 번들링이 정상적으로 되고 번들링돤 애플리케이션이 브라우저에서 정상적으로 실행 되기 위해서는 애플리케이션이 모듈로 잘 분리되고 조직화 되어 있어야 함을 전제로 한다는 것이다. 

#### 1. 애플리케이션 작성

##### 1-1 src/index.js, src/App.js

​	앞의 실습3과 동일하다 이미 ES6 모듈 스펙에 맞춰 잘 분리했다. 앞의 실습과 다른 점은 `src` 디렉토리에 있다는 것이다. 이 실습부터는 번들링 과정을 걷쳐야 한다. 번들링을 통해 번들 파일을 빌드해야 하고 번들 파일을 `public` 디렉토리에 배포해야 하는 과정도 있다. 개발할 때는 `src` 디렉토리의 모듈들로 애플리케이션을 분리해서 개발한다. 배포 디렉토리 `public` 에는 실제 웹서버에서 브라우저가 요청하는  index.html 그리고 모듈들을 번들링한 bundle.js 번들 파일이 있게 된다.    

##### 1-2  public/index.html

```html
<!DOCTYPE html>
<head>
<meta charset='utf-8'>
<title>Hello World</title>
</head>
<body>
    <div id='root'></div>
    <script src='bundle.js'></script>
</body>
```

​	JavaScript 파일 링크로 bundle.js 를 연결하였다.

##### 1-3 public/bundle.js 번들링 하기

1. webpack 설치

   번들링을 위한 도구 webpack-cli, webpack 을 설치한다.

   ```bash
   $ npm i -D webpack-cli webpack
   ```

   ​	실제 번들링을 하는 코어 패키지는 webpack 이다. webpack-cli는 webpack에 다양한 명령을 할 수 있는 CLI 도구들이 있는 패키지이기 때문에 함께 설치해야 한다. 

2. webpack.config.js

   webpack 패키지를 설치했다고 바로 번들링을 할 수 있는 것은 아니다. 모듈은 어디에 있고 번들링 최종 결과물의 이름과 생성 위치 등을 설정해야 한다. 설정 파일의 이름은 webpack.config.js 이다.

   ```JavaScript
   const path = require('path');
   
   module.exports = {
       entry: path.resolve('src/index.js'),
       output: {
           path: path.resolve('public'),
           filename: 'bundle.js'
       }
   }
   ```

   ​	설정 파일의 import와 export 부분을 보면 ES6 표준 모듈 방식이 아니다. webpack 내부는 아직 ES6 표준 모듈을 지원하지 못한다. 따라서 설정 js 파일 모듈 문법은 ES6 이전의 모듈 지원에 사용했던 CommonJS 방식으로 import대신 require(..) 그리고 export 대신 module.exports를 사용해야 한다. 그리고 프로젝트 설정에서 전역으로 ES6 모듈 사용 설정을 하지 말아야 한다. package.json 에 "type": "module" 을 추가하지 않는다.   

   ​	entry는 의존성 분석을 시작하는 시작 모듈이다. src/index.js 부터 import를 찾아가며 의존성 분석을 시작하고 의존성이 발견된 모듈은 번들링을 할 것이다. output 에 지정한 이름 최종 번들 파일 bundle.js 를 public 디렉토리에 생성할 것을 설정하고 있다.  	  

3. 빌드하기(번들링)

   ​	빌드(번들링) 시작 명령은 webpack 이다.

   <img src="http://image.kickscar.me:8080/markdown/react-practices/ch01-0005.png" alt="s" style="zoom:40%;" />

   ​	번들링이 정상적으로 완료돠면 public 디렉토리에 bundle.js 가 생성된다.

#### 2. Express 서버 작성 및 실행

​	앞의 실습과 같다. 실습 프로젝트에서 복사하거나 앞의 실습의 'Express 서버 작성 및 실행' 부분을 참고하여 server.mjs 작성하고 실행하도록 한다. 확장자가 msj인 것은 오타가 아니다. webpack 빌드를 위해 ES6 모듈 지원을 전역으로 하지 않았기 때문에 개별적 js 파일을 ES6 모듈로 실행 시키기 위해 확장자를 mjs로 변경했다.

```bash
$ node server
starts server on port 8080
```

​	브라우저로 접근해 보면 잘 작동하는 것을 확인할 수 있다.

<img src="http://image.kickscar.me:8080/markdown/react-practices/ch01-0006.png" alt="s" style="zoom:40%;" />



#### 3. 결론

​	모듈로 분리된 애플리케이션을 webpack을 사용하여 하나의 번들(bundle.js) 로 번들링하고 배포해 보았다. 이 방법은 복잡한 프론트엔드 개발에서 사용되는 보편적인 방법임을 이해해야 한다.  webpack 설정은 실습처럼 간단하지 않다. react와 같은 라이브러리를 이용해 프론트엔드 애플리케이션을 개발하고 css, image, font 등 외부 리소스까지 번들링 하고 개발 서버 구동과 빌드 배포를 위한 자동화된 스크립팅 까지 하려면 설정은 당연히 복잡해진다. 물론 설정을 자동화 하는 스크립트들과 도구들이 많이 있지만 이런 도구와 스크립트 도움없이 직접 개발 설정을 할 줄 알아야 한다. 

​	기본적인 내용인 모듈과 webpack의 까지 실습에서 다루었기 때문에 이제 DOM API 기반 애플리케이션을 Virtual DOM 기반 UI 렌더링 엔진을 기반으로 하는 애플리케이션으로 바꿀 수 있다.  Virtual DOM 기반 UI 렌더링 엔진은 React 라이브러리를 사용할 것이다.

​	왜 굳이 직접적인 DOM을 조작하는 대신  Virtual DOM을 조작하는 UI 렌더링 엔진 기반의 프레임워크나 라이브러리를 사용해서 애플리케이션을 작성해야 하는가? 부터 그 중에서도 왜 하필 React 인가? 까지 설득시켜야 할 내용이 많다. 실습5, 실습6 에서 직접 React 코드를 작성해 보면서 이해 하도록 한다.