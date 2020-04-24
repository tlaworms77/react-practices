## React.JS Practices

class **Index** extends React.Component {<br/>
&nbsp;&nbsp;&nbsp;render() {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;IndexItem chapter='ch01' title=''/&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;IndexItem chapter='ch02' title=''/&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)<br/>
&nbsp;&nbsp;&nbsp;}<br/>
}


#### 기본 강의 내용 요약
<pre>
1. 시작하기 - 주요 개념 정리


[실습1] es6 for react 
	$ mkdir project-ex01



[실습2] 전통적인 DOM API 기반 JavaScript 애플리케이션
 
	2-1. 프로젝트 구성
		
		$ mkdir project-ex02

		public/index.js 작성
		public/index.html 작성

[실습3] 모듈 기반 애플리케이션 작성해 보기
	3-1. 단순히 나누어 보기
		$ mkdir project-ex03

		public/index.js 작성
		public/App.js 작성
		public/index.html 작성
		
		[생각해보기] Module 프로그래밍이라 할 수 없는 이유?

	3-2. ES6 모듈 지원 예제 
		$mkdir project-ex04
		
		src/App.js 작성
		src/index.js 작성

	3-3. 모듈 기반 브라우저 애플리케이션 작성
		
		-- 프로젝트 생성 및 애플리케이션 작성
		$ mkdir project-ex05
		$ npm init -y
		
		public/index.js 작성
		public/App.js 작성
		public/index.html 작성

		$ npm i -D express
		web-server.js 작성
		실행및 브라우저 결과 확인		

		npm scripting 적용
		$ npm start

		[생각해보기] 브라우저 베이스 기반 모듈 애플리케이션의 문제점?
		
[실습4] 번들링
	4-1. 프로젝트 생성 및 애플리케이션 작성
		$ mkdir project-ex06
		$ npm init -y

		public/index.html 수정

		src/index.js 복사 (from project-ex05)
		src/App.js 복사 (from project-ex05)
		web-server.js 복사 (from project-ex05)


	4-2. webpack 설치 및 번들링

		$ npm i -D webpack webpack-cli
		$ npm i -D express
		$ npx webpack -v		

		$ npx webpack src/index.js -o public/budle.js 
		$ node web-server

	4-3. webpack.config.js 작성
		$ npx webpack 

	4-4. webpack-dev-server 로 테스트 하기
		
		$ npm i -D webpack-dev-server

		webpack.config.js에 devServer 섹션 추가

		$ npx webpack-dev-server

	4-5. npm scripting 적용
		$ npm start
		$ npm run build

[실습5] 리액트 리팩토링
	5-1 프로젝트 생성 및 애플리케이션 작성

		$ mkdir project-ex07
		$ npm init -y
		
		public/index.html 복사(from project-ex06)

		src/index.js 복사(from project-ex06)
		src/App.js 복사(from project-ex06)		

	5-2 webpack 설정

		$ npm i -D webpack webpack-cli webpack-dev-server
		
		webpack.config.js 복사(from project-ex06)
		npm scripting 설정(package.json, project-ex06 참고)
		test

	5-3 React Refactoring
		$ npm i -D react react-dom
		
	5-4 transpiling	
		$ npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react

		babel-loader 설정 (webpack.config.js)
		babel 설정(babel.config.json)
		 
		$ npm run build
		$ npm start
	

	- Component
	- JSX




[실습6]



================================================================


2. JSX


3. Virtual DOM


4. Component


5. Routing


6. Flux
   
</pre>