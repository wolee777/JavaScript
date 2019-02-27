function Person( arg ) {
	this.name = arg;
}

Function.prototype.method = function( name, func ) {
	this.prototype[name] = func;
}

Person.prototype.setName = function( value ) {
	this.name = value;
};

Person.prototype.getName = function() {
	return this.name;
};

function Student( arg ) {
}

function F() {};
F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;

console.dir( F );
console.dir( Student );

var me = new Student();
me.setName( "zzoon" );

console.dir( me );
console.log( me.getName() );
console.log( "----------------------------------------------" );
