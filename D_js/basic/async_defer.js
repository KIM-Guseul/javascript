/*
async - defer

== head에 script 추가
:: parsing HTML - fetching js - executing js - parsing HTML
-> js 파일 용량 크면 사용자가 페이지 볼 때까지 오래 기다려야 돼

body 끝부분에 script 추가
:: parsing HTML - fetching js - executing js
-> 사용자가 기본적인 페이지는 빨리 볼 수 있어. (js 의존도가 높은 사이트에는 안맞아.)

head + async 
:: parsing HTML (fetching js - executing js) - parsing HTML

head + defer
:: parsing HTML (fetching js) -executing js

async
:: 정의된 순서에 상관없이 먼저 패칭되는 순서로 js 실행.

defer
:: 정의된 순서대로 js 실행.

순수 바닐라 자바스크립 이용 시 ::
'use strict'; 선언해서 strict 모드로 개발하기!!!!!!!
:: 과한 자율성 제한.



*/