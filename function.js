// add() 함수 선언문
function add( x, y ) {
	return x + y;
}

console.log( add( 3, 4 ) );
console.log('---------------------');

var add = function ( x, y ) {
	return x + y;
};

var plus = add;

console.log( typeof( add ) );
console.dir( add );
console.log( typeof( plus ) );
console.dir( add );
console.log( add( 3, 4 ) );
console.log( plus( 5, 6 ) );
console.log('---------------------');

var add = function sum( x, y ) {
	return x + y;
};

console.log( typeof( add ) );
console.dir( add );
console.log( add( 3, 4 ) );
console.log( typeof( sum ) );
//console.dir( sum );				// Uncaught ReferenceError: sum is not defined
//console.log( sum( 3, 4 ) );		// Uncaught ReferenceError: sum is not defined
console.log('---------------------');

var factorialVar = function factorial( n ) {
	if ( n <= 1 ) {
		return 1;
	}
	return n * factorial( n - 1 );
};

console.log( factorialVar( 3 ) );
//console.log( factorial( 3 ) );	// Uncaught ReferenceError: factorial is not defined
console.log('---------------------');

var add = new Function( 'x', 'y', 'return x + y' );

console.log( add( 3, 4 ) );