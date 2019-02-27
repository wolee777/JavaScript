function Person( arg ) {
	this.name = arg;
}

Person.prototype.setName = function( value ) {
	this.name = value;
};

Person.prototype.getName = function() {
	return this.name;
};

function Student( arg ) {
	Person.apply( this, arguments );
}

var you = new Person( "Iamgildong" );
Student.prototype = you;

console.dir( you );
console.dir( Student );

var me = new Student( "zzoon" );
me.setName( "zzoon" );

console.dir( me );
console.log( me.getName() );
console.log( "----------------------------------------------" );
