// 변수에 함수 할당
var foo = 100;
var bar = function() { return 100; };
console.log( bar() );

var obj = {};
obj.baz = function() { return 200; };
console.log( obj.baz() );
console.log('-----------------------');

// 함수 표현식으로 foo() 함수 생성
var foo = function( func ) {
	func();		// 인자로 받은 func() 함수 호출
}

// foo() 함수 실행
foo( function() {
	console.log( 'Function can be used as the argument.' );
} );
console.log('-----------------------');

// 함수를 리턴하는 foo() 함수 정의
var foo = function() {
	return function() {
		console.log( 'this function is the return value.' );
	};
};

var bar = foo();
bar();

