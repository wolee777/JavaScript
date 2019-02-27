var Person = function( arg ) {
	var name = arg ? arg : "zzoon";
	
	this.getName = function() {
		return name;
	}
	
	this.setName = function( arg ) {
		name = arg;
	}
};

var me = new Person();
console.dir( me );
console.log( me.getName() );
console.log( "----------------------------------------------" );

me.setName( "iamgildong" );
console.log( me.getName() );
console.log( me.name );
console.log( "----------------------------------------------" );

