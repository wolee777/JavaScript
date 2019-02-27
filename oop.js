function Person( arg ) {
	this.name = arg;
	
	this.getName = function() {
		return this.name;
	}
	
	this.setName = function( value ) {
		this.name = value;
	}
}

var me = new Person( "zzoon" );
console.dir( me );

console.log( me.getName() );

me.setName( "iamgildong" );
console.log( me.getName() );
console.log( "----------------------------------------------" );

function Person2( arg ) {
	this.name = arg;
}

Person2.prototype.getName = function() {
	return this.name;
}

Person2.prototype.setName = function( value ) {
	this.name = value;
}

me = new Person2( "me" );
you = new Person2( "you" );

console.dir( me );
console.dir( you );

console.log( me.getName() );
console.log( you.getName() );
console.log( "----------------------------------------------" );

Function.prototype.method = function( name, func ) {
	this.prototype[name] = func;
}

function Person3( arg ) {
	this.name = arg;
}

Person3.method( "setName", function( value ) {
	this.name = value;
});

Person3.method( "getName", function() {
	return this.name;
});

me = new Person3( "me" );
you = new Person3( "you" );

console.dir( me );
console.dir( you );

console.log( me.getName() );
console.log( you.getName() );
console.log( "----------------------------------------------" );
