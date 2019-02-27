// 객체 리터럴을 통한 foo 객체 생성
var foo = {
	name : 'foo',
	age : 30,
	major : 'computer science'
};

// for in문을 이용한 객체 프로퍼티 출력
var prop;
for ( prop in foo ) {
	console.log( prop, foo[prop] );
}

var foo1 = {
	name : 'foo',
	nickname : 'babo'
};

console.log( foo1.nickname );
delete foo1.nickname;
console.log( foo1.nickname );

delete foo1;
console.log( foo1.name );
