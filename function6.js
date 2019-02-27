// Person() 생성자 함수
var Person = function (name) {
	// 함수 코드 실행 전
	this.name = name;
	// 함수 리턴
};

// foo 객체 생성
var foo = new Person( 'foo' );
console.log( foo.name );
console.log( '-----------------------------------------------------' );

// 객체 리터럴 방식으로 foo 객체 생성자
var foo = {
	name : 'foo',
	age : 35,
	gender : 'man'
};
console.dir( foo );

// 생성자 함수
function Person2( name, age, gender, position ) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

// Person 생성자 함수를 이용한 bar 객체, baz 객체 생성
var bar = new Person2( 'bar', 33, 'woman' );
console.dir( bar );

var baz = new Person2( 'baz', 25, 'woman' );
console.dir( baz );
console.log( '-----------------------------------------------------' );

var qux = Person2( 'qux', 20, 'man' );
console.log( qux );

console.log( window.name );
console.log( window.age );
console.log( window.gender );
console.log( '-----------------------------------------------------' );

// 생성자 함수
function Person3( name, age, gender ) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

// foo 빈 객체 생성
var foo = {};

// apply() 메서드 호출
Person3.apply( foo, [ 'foo', 30, 'man' ] );
console.dir( foo );
Person3.call( foo, 'foo', 40, 'man' );
console.dir( foo );
console.log( '-----------------------------------------------------' );

function myFunction() {
	console.dir( arguments );
	
//	arguments.shift();			// 에러 발생

// arguments 객체를 배열로 변환
	var args = Array.prototype.slice.apply( arguments );
	console.dir( args );
}

myFunction( 1, 2, 3 );
console.log( '-----------------------------------------------------' );

var arrA = [ 1, 2, 3 ];
var arrB = arrA.slice( 0 );
var arrC = arrA.slice();
var arrD = arrA.slice( 1 );
var arrE = arrA.slice( 1, 2 );
console.dir( arrA );
console.dir( arrB );
console.dir( arrC );
console.dir( arrD );
console.dir( arrE );
console.log( '-----------------------------------------------------' );

// noReturnFunc() 함수
var noReturnFunc = function () {
	console.log( 'This function has no return statement.' );
};

var result = noReturnFunc();
console.log( result );
console.log( '-----------------------------------------------------' );

// Person4() 생성자 함수
function Person4( name, age, gender ) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	
	// 명시적으로 다른 객체 반환
	//return { name : 'bar', age : 20, gender : 'woman' };
	
	// 객체가 아닌 boolean, number, string 반환
	return 100;
}

var foo = new Person4( 'foo', 30, 'man' );
console.dir( foo );
console.log( '-----------------------------------------------------' );
