/**
 * 
 */
// 숫자 타입
var intNum = 10;
var floatNum = 0.1;

// 문자열 타입
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = "double quote string";
var singleChar = 'a';

// 불린 타입
var boolVar = true;

// undefined 타입
var emptyVar;

// null 타입
var nullVar = null;

console.log(
		typeof intNum,
		typeof floatNum,
		typeof singleQuoteStr,
		typeof doubleQuoteStr,
		typeof singleChar,
		typeof boolVar,
		typeof emptyVar,
		typeof nullVar 
);

// 숫자형은 무조건 실 수 형
var num = 5 / 2;

console.log( num );
console.log( Math.floor( num ) );

// 문자열은 Read Only
var str = 'test';
console.log( str[0], str[1], str[2], str[3] );

str[0] = 'T';
console.log( str );

// null type 변수는 object 형 
var nullVar = null;

console.log( typeof nullVar == null );
console.log( nullVar == null );