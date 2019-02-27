// Object를 이용해서 foo 빈 객체 생성
var foo = new Object()

// foo 객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log( typeof foo );
console.log( foo );

// 객체 리터럴 방식으로 foo1 객체 생성
var foo1 = {
	name : 'foo',
	age : 30,
	gender : 'male'
};

console.log( typeof foo1 );
console.log( foo1 );
