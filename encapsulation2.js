var Person = function( arg ) {
	var name = arg ? arg : "zzoon";
	
	return {
		getName : function() {
			return name;
		},
		setName : function( arg ) {
			name = arg;
		}
	};
}

var me = Person();		//or var me = new Person();
console.dir( me );
console.log( me.getName() );
console.log( "----------------------------------------------" );

me.setName( "iamgildong" );
console.log( me.getName() );
console.log( me.name );
console.log( "----------------------------------------------" );

var ArrCreate = function( arg ) {
	var arr = [ 1, 2, 3 ];
	
	return {
		getArr : function() {
			return arr;
		}
	};
}

var obj = ArrCreate();	// or var obj = new ArrCreate();
var arr = obj.getArr();

console.dir( obj );
console.dir( arr );
console.log( "----------------------------------------------" );

arr.push( 5 );
console.log( obj.getArr() );
console.log( "----------------------------------------------" );

var Person2 = function( arg ) {
	var name = arg ? arg : "zzoon";
	
	var Func = function() {}
	Func.prototype = {
		getName : function() {
			return name;
		},
		setName : function( arg ) {
			name = arg;
		}
	};
	
	return Func;
}

me = new Person();
console.dir( Person );
console.dir( me );
console.log( me.getName() );