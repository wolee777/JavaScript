(function (name) {
	console.log( 'This is the immediate function -> ' + name );
})('foo');
console.log( '-----------------------------------------------------' );

// parent() 함수 정의
function parent() {
	var a = 100;
	var b = 200;
	
	// child() 내부 함수 정의
	function child() {
		var b = 300;
		
		console.log( a );
		console.log( b );
	}
	
	child();
}

parent();
//child();				// Uncaught ReferenceError: child is not defined
console.log( '-----------------------------------------------------' );

function parent2() {
	var a = 100;
	
	// child() 내부 함수
	var child = function () {
		console.log(a);
	}
	
	// child() 함수 반환
	return child;
}

var inner = parent2();
inner();
console.log( '-----------------------------------------------------' );

// self 함수
var self = function () {
	console.log( 'a' );
	return function () {
		console.log( 'b' );
	}
}

self = self();
self();
console.log( '-----------------------------------------------------' );

function func( arg1, arg2 ) {
	console.log( arg1, arg2 );
}

func();
func( 1 );
func( 1, 2 );
func( 1, 2, 3 );
console.log( '-----------------------------------------------------' );

// add() 함수
function add( a, b ) {
	// arguments 객체 출력
	console.dir( arguments );
	return a + b;
}

console.log( add( 1 ) );
console.log( add( 1, 2 ) );
console.log( add( 1, 2, 3 ) );
console.log( '-----------------------------------------------------' );

function sum() {
	var result = 0;
	
	for ( var i = 0; i < arguments.length; ++i ) {
		result += arguments[i];
	}
	
	return result;
}

console.log( sum( 1, 2, 3 ) );
console.log( sum( 1, 2, 3, 4, 5, 6, 7, 8, 9 ) );
