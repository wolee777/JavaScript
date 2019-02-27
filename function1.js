console.log( add( 2, 3 ) );

// 함수 선언문 형태로 add() 함수 정의
function add( x, y ) {
	return x + y;
}

console.log( add( 3, 4 ) );
console.log('-----------------------');

//console.log( sum( 2, 3 ) );			// Uncaught TypeError: sum is not a function

// 함수 표현식 형태로 sum() 함수 정의
var sum = function ( x, y ) {
	return x + y;
};

console.log( sum( 3, 4 ) );
console.log('-----------------------');

function add( x, y ) {
	return x + y;
}

add.result = add( 3, 2 );
add.status = 'OK';

console.log( add.result );
console.log( add.status );
console.log( add );
console.dir( add );
console.log('-----------------------');


