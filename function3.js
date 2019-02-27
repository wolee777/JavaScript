function add( x, y ) {
	return x + y;
}

console.dir( add );
console.log('-----------------------');

function func0() {}

function func1( x ) {
	return x;
}

function func2( x, y ) {
	return x + y;
}

function func3( x, y, z ) {
	return x + y + z;
}

console.log( 'func0.length - ' + func0.length );
console.log( 'func1.length - ' + func1.length );
console.log( 'func2.length - ' + func2.length );
console.log( 'func3.length - ' + func3.length );
console.log('-----------------------');

// myFunction() 함수 정의
function myFunction() {
	return true;
}

console.dir( myFunction.prototype );
console.dir( myFunction.prototype.constructor );
