function create_object( o ) {
	function F() {}
	F.prototype = o;
	
	return new F;
}

var person = {
	name : "zzoon",
	getName : function() {
		return this.name;
	},
	setName : function( arg ) {
		this.name = arg;
	}
};

var student = create_object( person );
console.dir( student );

student.setName( "me" );
console.log( student );
console.log( "----------------------------------------------" );

var person2 = {
	name : "zzoon",
	getName : function() {
		return this.name;
	},
	setName : function( arg ) {
		this.name = arg;
	}
};

function create_object2( o ) {
	function F() {}
	F.prototype = o;
	
	return new F;
}

function extend( obj, prop ) {
	if ( !prop ) { 
		prop = obj;
		obj = this;
	}
	
	for ( var i in prop ) {
		obj[i] = prop[i];
	}
	
	return obj;
}

student = create_object2( person2 );
var added = {
	setAge : function( age ) {
		this.age = age;
	},
	
	getAge : function() {
		return this.age;
	}
};

extend( student, added );
console.dir( student );
console.dir( added );

student.setAge( 25 );
console.log( student.getAge() );
console.log( "----------------------------------------------" );
