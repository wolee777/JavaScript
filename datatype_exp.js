var num = 0.5;
console.log( num.toExponential( 1 ) );
//console.log( "test", charAt( 2 ) );	//Uncaught ReferenceError: charAt is not defined

var add1 = 1 + 2;
var add2 = 'my' + 'string';
var add3 = 1 + 'string';
var add4 = 'string' + 2;

console.log( add1 );
console.log( add2 );
console.log( add3 );
console.log( add4 );

console.log( 1 == '1' );
console.log( 1 === '1' );

console.log( !!0 );
console.log( !!1 );
console.log( !!'string' );
console.log( !!'' );
console.log( !!true );
console.log( !!false );
console.log( !!null );
console.log( !!undefined );
console.log( !!{} );
console.log( !![ 1, 2, 3 ] );
