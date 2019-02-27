// Person 생성자 함수
function Person( name ) {
	this.name = name;
}

// foo 객체 생성
var foo = new Person( 'foo' );

console.dir( Person );
console.dir( foo );
console.log( '-----------------------------------------------------' );

var myObject = {
	name : 'foo',
	sayName : function() {
		console.log( 'My name is ' + this.name );
	}
};

myObject.sayName();
console.log( myObject.hasOwnProperty( 'name' ) );
console.log( myObject.hasOwnProperty( 'nickName' ) );
//myObject.sayNickName();					// Uncaught TypeError: myObject.sayNickName is not a function
console.log( '-----------------------------------------------------' );

// Person() 생성자 함수
function Person2( name, age, hobby ) {
	this.name = name;
	this.age = age;
	this.hobby = hobby;
}

// foo 객체 생성
var foo2 = new Person2( 'foo', 30, 'tennis' );

// 프로토타입 체이닝
console.log( foo.hasOwnProperty( 'name' ) );

// Person.prototype 객체 출력
console.log( Person.prototype );
console.log( '-----------------------------------------------------' );

String.prototype.testMethod = function () {
	console.log( 'This is the String.prototype.testMethod()' );
};

var str = "this is test";
str.testMethod();

console.dir( String.prototype );
console.log( '-----------------------------------------------------' );

// Person() 생성자 함수
function Person( name ) {
	this.name = name;
}

// foo 객체 생성
var foo = new Person( 'foo' );

// foo.sayHello()

// 프로토타입 객체에 sayHello() 메서드 정의
Person.prototype.sayHello = function () {
	console.log( 'Hello' );
}

foo.sayHello();
console.log( '-----------------------------------------------------' );
