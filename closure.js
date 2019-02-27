function outerFunc() {
	var x = 10;
	var innerFunc = function() {
		console.log( x );
	}
	
	return innerFunc;
}

var inner = outerFunc();

inner();
console.log( '-----------------------------------------------------' );

function outerFunc( arg1, arg2 ) {
	var local = 8;
	
	function innerFunc( innerArg ) {
		console.log( ( arg1 + arg2 ) / ( innerArg + local ) );
	}
	
	return innerFunc;
}

var exam1 = outerFunc( 2, 4 );

exam1( 2 );
console.log( '-----------------------------------------------------' );

function HelloFunc( func ) {
	this.greeting = "hello";
}

HelloFunc.prototype.call = function( func ) {
	func ? func( this.greeting ) : this.func( this.greeting );
}

var userFunc = function( greeting ) {
	console.log( greeting );
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();
console.log( '-----------------------------------------------------' );

