// 커링
function calculate( a, b, c ) {
	return a * b + c;
}

function curry( func ) {
	var args = Array.prototype.slice.call( arguments, 1 );
	
	return function() {
		return func.apply( null, args.concat( Array.prototype.slice.call( arguments ) ) );
	}
}

function curry2( func ) {
	var args = Array.prototype.slice.call( arguments, 1 );
	
	return function() {
		var arg_idx = 0;
		
		for ( var i = 0; i < args.length && arg_idx < arguments.length; ++i ) {
			if ( args[i] === undefined ) {
				args[i] = arguments[arg_idx++];
			}
		}
		
		return func.apply( null, args );
	}
}

var new_func1 = curry( calculate, 1 );
console.log( new_func1( 2, 3 ) );
var new_func2 = curry( calculate, 1, 3 );
console.log( new_func2( 3 ) );
var new_func3 = curry2( calculate, 1, undefined, 4 );
console.log( new_func3( 3 ) );
console.log( '----------------------------------------------' )

// bind
var print_all = function( arg ) {
	for ( var i in this ) {
		console.log( i + " : " + this[i] );
	}
	
	for ( var i in arguments ) {
		console.log( i + " : " + arguments[i] );
	}
}

var myobj = { name : "zzoon" };

var myfunc = print_all.bind( myobj );
myfunc();

var myfunc1 = print_all.bind( myobj, "iamgildong", "others" );
myfunc1( "insidejs" );
console.log( '----------------------------------------------' )

// wrapper
function wrap( object, method, wrapper ) {
	var fn = object[method];
	return object[method] = function() {
		return wrapper.apply( this, [ fn ].concat( Array.prototype.slice.call( arguments ) ) );
	};
}

Function.prototype.original = function( value ) {
	this.value = value;
	console.log( "value : " + this.value );
}

var mywrap = wrap( Function.prototype, "original", function( orig_func, value ) {
	this.value = 20;
	orig_func( value );
	console.log( "wrapper value : " + this.value );
});

var obj = new mywrap( "zzoon" );
console.log( '----------------------------------------------' )

// 반복함수
// each
function each( obj, fn, args ) {
	if ( obj.length == undefined ) {
		for ( var i in obj ) {
			fn.apply( obj[i], args || [ i, obj[i] ] );
		}
	} else {
		for ( var i = 0; i < obj.length; ++i ) {
			fn.apply( obj[i], args || [ i, obj[i] ] );
		}
	}
	
	return obj;
}

each( [ 1, 2, 3 ], function( idx, num ) {
	console.log( idx + " : " + num );
});

var zzoon = {
	name : "zzoon",
	age : 30,
	sex : "Male"
};

each( zzoon, function( idx, value ) {
	console.log( idx + " : " + value );
});
console.log( '----------------------------------------------' )

// map
Array.prototype.map = function( callback ) {
	// this가 null인지, 배열인지 체크
	// callback이 함수인지 체크
	var obj = this;
	var value, mapped_value;
	var A = new Array( obj.length );
	
	for ( var i = 0; i < obj.length; ++i ) {
		value = obj[i];
		mapped_value = callback.call( null, value );
		A[i] = mapped_value;
	}
	
	return A;
}

var arr = [ 1, 2, 3 ];
var new_arr = arr.map( function( value ) {
	return value * value;
});

console.log( new_arr );
console.log( '----------------------------------------------' )

// reduce
Array.prototype.reduce = function( callback, memo ) {
	// this가 null인지, 배열인지 체크
	// callback이 함수인지 체크
	var obj = this;
	var value, accumulated_value = 0;
	
	for ( var i = 0; i < obj.length; ++i ) {
		value = obj[i];
		accumulated_value = callback.call( null, accumulated_value, value );
	}
	
	return accumulated_value;
};

var arr = [ 1, 2, 3 ];
var accumulated_val = arr.reduce( function( a, b ) {
	return a + b * b;
});

console.log( accumulated_val );
