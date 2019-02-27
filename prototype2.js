// Person() 생성자 함수
function Person( name ) {
	this.name = name;
}

// getName() 프로토타입 메서드
Person.prototype.getName = function () {
	return this.name;
};

// foo 객체 생성
var foo = new Person( 'foo' );

console.log( foo.getName() );

// Person.prototype 객체에 name 프로퍼티 동적 추가
Person.prototype.name = 'person';

console.log( Person.prototype.getName() );
console.dir( foo );
console.dir( Person );
console.log( '-----------------------------------------------------' );

// Person() 생성자 함수
function Person( name ) {
	this.name = name;
}
console.log( Person.prototype.constructor );

// foo 객체 생성자
var foo = new Person( 'foo' );
console.log( foo.country );

// 디폴트 프로토타입 객체 변경
Person.prototype = {
	country : 'korea',
};
console.log( Person.prototype.constructor );

// bar 객체 생성자
var bar = new Person( 'bar' );
console.log( foo.country );
console.log( bar.country );
console.log( foo.constructor );
console.log( bar.constructor );
console.log( '-----------------------------------------------------' );

// Person() 생성자 함수
function Person( name ) {
	this.name = name;
}

Person.prototype.country = 'korea';

var foo = new Person( 'foo' );
var bar = new Person( 'bar' );
console.log( foo.country );
console.log( bar.country );

foo.country = 'USA';
console.log( foo.country );
console.log( bar.country );
console.log( '-----------------------------------------------------' );
