## [React.JS Practices](https://github.com/kickscar-javascript/react-practices) / ch01. 시작하기



#### 강의 내용 요약

<pre>

===== 1. 시작하기 - 주요 개념 정리 ===========================================


[실습1] es6 for react 
	$ mkdir project-ex01







[실습2] 전통적인 DOM API 기반 JavaScript 애플리케이션

*** 2-1. 프로젝트 구성
		
$ mkdir project-ex02

public/index.js 작성
public/index.html 작성







[실습3] 모듈 기반 애플리케이션 작성해 보기

*** 3-1. 단순히 나누어 보기
		
$ mkdir project-ex03

public/index.js 작성
public/App.js 작성
public/index.html 작성
		
Module 프로그래밍이라 할 수 없는 이유?



*** 3-2. ES6 모듈 지원 예제 

$mkdir project-ex04
		
src/App.js 작성
src/index.js 작성



*** 3-3. 모듈 기반 브라우저 애플리케이션 작성
		
-- 프로젝트 생성
$ mkdir project-ex05
$ npm init -y

-- 클라이언트 애플리케이션 작성
public/index.js 작성
public/App.js 작성
public/index.html 작성

-- 서버 애플리케이션 작성
$ npm i -D express
web-server.js 작성
	
-- 서버 애플리케이션 및 브라우저 결과 확인
$ node web-server

-- npm scripting 적용
$ npm start

-- 브라우저 베이스 기반 모듈 애플리케이션의 문제점?







[실습4] 번들링

*** 4-1. 프로젝트 생성 및 애플리케이션 작성

-- 프로젝트 생성		
$ mkdir project-ex06
$ npm init -y

-- 클라이언트 애플리케이션 작성		
public/index.html 수정
src/index.js 복사 (from project-ex05)
src/App.js 복사 (from project-ex05)
web-server.js 복사 (from project-ex05)


*** 4-2. webpack 설치 및 번들링

-- webpack 설치
$ npm i -D webpack webpack-cli
$ npm i -D express
$ npx webpack -v		

-- CLI 번들링
$ npx webpack src/index.js -o public/budle.js 

-- 서버 애플리케이션 및 브라우저 결과 확인
$ node web-server


*** 4-3. webpack.config.js 설정하기

-- webpack.config.js 작성

-- CLI 번들링
$ npx webpack 


*** 4-4. webpack-dev-server 테스트
		
-- webpack-dev-server 설치        
$ npm i -D webpack-dev-server

-- devServer 섹션 추가 (webpack.config.js)

-- 개발 서버 실행 및 브라우저에서 애플리케이션 결과 확인
$ npx webpack-dev-server

*** 4-5. npm scripting 적용
$ npm start
$ npm run build






[실습5] 리액트 리팩토링 & Component 기본 구조

*** 5-1 프로젝트 생성 및 애플리케이션 작성

-- 프로젝트 생성
$ mkdir project-ex07
$ npm init -y
		
-- 애플리케이션 작성
public/index.html 복사(from project-ex06)
src/index.js 복사(from project-ex06)
src/App.js 복사(from project-ex06)		


*** 5-2 webpack 설정

-- webpack 설치 및 설정
$ npm i -D webpack webpack-cli webpack-dev-server

webpack.config.js 복사(from project-ex06)
npm scripting 설정(package.json, project-ex06 참고)

-- test
$npx sebpack-dev-server


*** 5-3 React Refactoring
		
-- react 라이브러리 패키지 설치
$ npm i -D react react-dom

-- react 코드로 수정
src/index.js 수정
src/App.js 수정	
	
*** 5-4 transpiling	
		
-- babel 설치
$ npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react

-- babel-loader 설정 (webpack.config.js)

-- babel 설정(babel.config.json)

-- 빌드(번들링)		 
$ npm run build

-- 개발 서버 실행 및 브라우저에서 애플리케이션 결과 확인
$ npm start






[실습6] Component 조합 방법 및 속성의 전달

*** 5-1 프로젝트 생성 및 개발 환경 구성

-- 프로젝트 구조 초기화
$ mkdir project-ex08
$ cd project-ex08 
$ npm init -y
$ mkdir public
$ mkdir src

-- 패키지 설치
$ npm i -D webpack webpack-cli webpack-dev-server @babel/core babel-loader @babel/preset-env @babel/preset-react react reac-dom

-- webpack.conf.js 생성 및 설정
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
    },    
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 8080,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }     
}

-- babel.config.json 생성 및 설정
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

-- npm scriptting 적용
"scripts": {
    "start": "node_modules/.bin/webpack-dev-server --progress",
    "build": "node_modules/.bin/webpack"
}



*** 5-2 Component Design

-- public/_index.html (Component Design) 작성


*** 5-3 Component들 구현 및 조합

-- landing html 작성
public/index.html

-- react component 작성
    src/App.js
    src/FoodList.js
    src/FoodListItem.js
    src/index.js

-- 빌드(번들링)		 
$ npm run build

-- 개발 서버 실행 및 브라우저에서 애플리케이션 결과 확인
$ npm start

-- 몇 가지 맛보기 리액트의 특징
    + 재사용 가능한 컴포넌트를 중첩하고 조합하는 방법으로 UI(View)를 만드는 방식을 추천한다.
    + property(속성)
        부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 메카니즘
      - 부모 -> 자식 (단방향)
      - 자식은 변경 할 수 없다. 부모가 소유한다.

-- 감을 잡았으면 더 자세한 리액트의 내용은 다음 장부터 [칸반 보드 애플리케이션]을 완성해 가면서 실습힌다.





[실습6] Component's state(상태): 칸반 보드 애플리케이션 소개

*** 5-1 프로젝트 생성 및 개발 환경 구성

-- 프로젝트 구조 초기화
$ mkdir project-ex09
$ cd project-ex09
$ npm init -y
$ mkdir public
$ mkdir src

-- 패키지 설치
$ npm i -D webpack webpack-cli webpack-dev-server @babel/core babel-loader @babel/preset-env @babel/preset-react react react-dom

-- webpack.conf.js 생성 및 설정
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
    },    
    devServer: {
        contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 8080,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }     
}

-- babel.config.json 생성 및 설정
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

-- npm scriptting 적용
"scripts": {
    "start": "node_modules/.bin/webpack-dev-server --progress",
    "build": "node_modules/.bin/webpack"
}


*** 5-2 Component Design

-- public/_index.html (Component Design) 작성

</pre>