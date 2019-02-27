var f1 = function( input ) {
	var result;
	/* 암호화 작업 수행 */
	result = 1;
	
	return result;
}

var f2 = function( input ) {
	var result;
	/* 암호화 작업 수행 */
	result = 2;
	
	return result;
}

var f3 = function( input ) {
	var result;
	/* 암호화 작업 수행 */
	result = 3;
	
	return result;
}

var get_encrypted = function( func ) {
	var str = 'zzoon';
	
	return function() {
		return func.call( null, str );
	}
}

var encrypted_value = get_encrypted( f1 )();
console.log( encrypted_value );
var encrypted_value = get_encrypted( f2 )();
console.log( encrypted_value );
var encrypted_value = get_encrypted( f3 )();
console.log( encrypted_value );
console.log( '----------------------------------------------' )

function sum( arr ) {
	var len = arr.length;
	var i = 0, sum = 0;
	
	for ( ; i < len; ++i ) {
		sum += arr[i];
	}
	
	return sum;
}

function multiply( arr ) {
	var len = arr.length;
	var i = 0, result = 1;
	
	for ( ; i < len; ++i ) {
		result *= arr[i];
	}
	
	return result;
}

var arr = [ 1, 2, 3, 4 ];
console.log( sum( arr ) );
console.log( multiply( arr ) );

console.log( '----------------------------------------------' )

function reduce( func, arr, memo ) {
	var len = arr.length, i = 0, accum = memo;
	
	for ( ; i < len; ++i ) {
		accum = func( accum, arr[i] );
	}
	
	return accum;
}

var arr2 = [ 1, 2, 3, 4 ];

var sum2 = function( x, y ) {
	return x + y;
}

var multiply2 = function( x, y ) {
	return x * y;
}

console.log( reduce( sum2, arr2, 0 ) );
console.log( reduce( multiply2, arr2, 1 ) );
console.log( '----------------------------------------------' )

function fact( num ) {
	var val = 1;
	
	for ( var i = 2; i <= num; ++i ) {
		val = val * i;
	}
	
	return val;
}

console.log( fact( 10 ) );
console.log( '----------------------------------------------' )

function fact_self( num ) {
	if ( num == 0 ) return 1;
	else return num * fact_self( num - 1 );
}

console.log( fact_self( 10 ) );
console.log( '----------------------------------------------' )

var fact2 = function() {
	var cache = { '0' : 1 };
	var func = function( n ) {
		var result = 0;
		
		if ( typeof( cache[n] ) === 'number' ) {
			result = cache[n];
		} else {
			result = cache[n] = n * func( n - 1 );
		}
		
		return result;
	}
	
	return func;
}();

console.log( fact2( 10 ) );
console.log( fact2( 20 ) );
console.log( '----------------------------------------------' )

var fibo = function() {
	var cache = { '0' : 0, '1' : 1 };
	
	var func = function( n ) {
		if ( typeof( cache[n] ) === 'number' ) {
			result = cache[n];
		} else {
			result = cache[n] = func( n - 1 ) + func( n - 2 );
		}
		
		return result;
	}
	
	return func;
}();

console.log( fibo( 10 ) );
console.log( '----------------------------------------------' )

var cacher = function( cache, func ) {
	var calculate = function( n ) {
		if ( typeof( cache[n] ) === 'number' ) {
			result = cache[n];
		} else {
			result = cache[n] = func( calculate, n );
		}
		
		return result;
	}
	
	return calculate;
};

var fact3 = cacher( { '0' : 1 }, function( func, n ) {
	return n * func( n - 1 );
});

var fibo2 = cacher( { '0' : 0, '1' : 1 }, function( func, n ) {
	return func( n - 1 ) + func( n - 2 );
});

console.log( fact3( 10 ) );
console.log( fibo2( 10 ) );
console.log( '----------------------------------------------' )
