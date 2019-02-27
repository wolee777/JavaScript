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

function saySomething( obj, methodName, name ) {
	return ( function( greeting ) {
		return obj[methodName]( greeting, name );
	});
}

function newObj( obj, name ) {
	obj.func = saySomething( this, "who", name );
	
	return obj;
}

newObj.prototype.who = function( greeting, name ) {
	console.log( greeting + "" + ( name || "everyone" ) );
}

var obj1 = new newObj( objHello, "zzoon" );

obj1.call();
console.log( '-----------------------------------------------------' );

var buffAr = [
	'I am ',
	'',
	'. I live in ',
	'',
	'. I\'am ',
	'',
	' years old.',
];

function getCompletedStr( name, city, age ) {
	buffAr[1] = name;
	buffAr[3] = city;
	buffAr[5] = age;

	return buffAr.join('');
}

var str = getCompletedStr( 'zzoon', 'seoul', 16 );

console.log( str );
console.log( '-----------------------------------------------------' );

var getCompletedStr2 = (function() {
	var buffAr = [
		'I am ',
		'',
		'. I live in ',
		'',
		'. I\'am ',
		'',
		' years old.',
	];
	
	return (function( name, city, age ) {
		buffAr[1] = name;
		buffAr[3] = city;
		buffAr[5] = age;

		return buffAr.join('');
	});
})();

var str2 = getCompletedStr2( 'zzoon', 'seoul', 16 );

console.log( str2 );
console.log( '-----------------------------------------------------' );

function callLater( obj, a, b ) {
	return (function() {
		obj["sum"] = a + b;
		console.log( obj["sum"] );
	});
}

var sumObj = {
	sum : 0
}

var func = callLater( sumObj, 1, 2 );
setTimeout( func, 500 );
console.log( '-----------------------------------------------------' );

function outerFunc( argNum ) {
	var num = argNum;
	
	return function( x ) {
		num += x;
		console.log( 'num : ' + num );
	}
}

var exam = outerFunc( 40 );
exam( 5 );
exam( -10 );
console.log( '-----------------------------------------------------' );

function func1() {
	var x = 1;
	return {
		func2 : function() { console.log( ++x ); },
		func3 : function() { console.log( -x ); }
	};
};

var exam = func1();
exam.func2();
exam.func3();
console.log( '-----------------------------------------------------' );

function countSeconds( howMany ) {
	for ( var i = 1; i <= howMany; ++i ) {
		setTimeout( function() {
			console.log( i );
		}, i * 1000 );
	}
};
countSeconds( 3 );
console.log( '-----------------------------------------------------' );

function countSeconds2( howMany ) {
	for ( var i = 1; i <= howMany; ++i ) {
		(function( currentI ) {
			setTimeout( function() {
				console.log( currentI );
			}, i * 1000 );
		}( i ) );
	}
};
countSeconds2( 3 );