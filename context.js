console.log( "This is global context" );

function ExContext1() {
	console.log( "This is ExContext1" );
};

function ExContext2() {
	ExContext1();
	console.log( "This is ExContext2" );
};

ExContext2();
console.log( '-----------------------------------------------------' );

function execute( param1, param2 ) {
	var a = 1, b = 2;
	
	function func() {
		return a + b;
	}
	
	return param1 + param2 + func();
}

console.dir( execute( 3, 4 ) );
console.log( execute( 3, 4 ) );
console.log( '-----------------------------------------------------' );

var var1 = 1;
var var2 = 2;

console.log( var1 );
console.log( var2 );
console.log( '-----------------------------------------------------' );

var var1 = 1;
var var2 = 2;

function func() {
	var var1 = 10;
	var var2 = 20;
	
	console.log( var1 );
	console.log( var2 );
}

func();

console.log( var1 );
console.log( var2 );
console.log( '-----------------------------------------------------' );

var value = "value1";

function printFunc() {
	var value = "value2";
	
	function printValue() {
		return value;
	}
	
	console.log( printValue );
}

printFunc();
console.log( '-----------------------------------------------------' );

var value = "value1";

function printValue2() {
		return value;
}

function printFunc2( func ) {
	var value = "value2";
	
	console.log( func() );
}

printFunc2( printValue2 );
console.log( '-----------------------------------------------------' );

var y = { x:5 };

function withExamFunc() {
	var x = 10;
	var z;
	
	with( y ) {
		z = function() {
			console.log( x );
		}
	}
	z();
}

withExamFunc();
console.log( '-----------------------------------------------------' );

