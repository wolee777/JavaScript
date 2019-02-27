var foo = new Array( 3 );
console.log( foo );
console.log( foo.length );

var bar = new Array( 1, 2, 3 );
console.log( bar );
console.log( bar.length );

var arr = [ 'bar' ];
var obj = {
	name : 'foo',
	length : 1
};

arr.push( 'baz' );
console.log( arr );
console.log( obj );

//obj.push( 'baz' );	//Uncaught TypeError: obj.push is not a function

var arr1 = [ 'bar' ];
var obj1 = { name : 'foo', length : 1 };

arr1.push( 'baz' );
console.log( arr1 );
console.log( obj1 );

//Array.protorype.push.apply( obj1, ['baz'] );	//Uncaught TypeError: Cannot read property 'push' of undefined
console.log( obj1 );

